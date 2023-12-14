import Product from "@/lib/models/product.model";
import { connectToDB } from "@/lib/mongoose";
import { scrapeAmazonProduct } from "@/lib/scraper";
import { getAveragePrice, getHighestPrice, getLowestPrice, getEmailNotificationType } from "@/lib/utils";
import { generateEmailBody, sendEmail } from "@/lib/nodemailer";
import { NextResponse } from "next/server";

export const maxDuration = 5 * (60 * 1000); // 5 minutes
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const GET = async () => {
  try {
    connectToDB();
    const products = await Product.find({});

    if (!products) {
      throw new Error("No products found");
    }

    const updated_products = await Promise.all(
      products.map(async (current_product) => {
        const scraped_product = await scrapeAmazonProduct(current_product.url);

        if (!scraped_product) {
          throw new Error("No product found");
        }

        const updated_price_history: any = [...current_product.priceHistory, { price: scraped_product.currentPrice }];

        const product = { ...scraped_product, priceHistory: updated_price_history, lowest_price: getLowestPrice(updated_price_history), highest_price: getHighestPrice(updated_price_history), average_price: getAveragePrice(updated_price_history) }

        const updated_product = await Product.findOneAndUpdate({ url: product.url }, product);

        const email_notification_type = getEmailNotificationType(scraped_product, current_product);

        if (email_notification_type && updated_product.users.length > 0) {
          const product_info = { title: updated_product.title, url: updated_product.url };

          const email_content = await generateEmailBody(product_info, email_notification_type);

          const user_emails = updated_product.users.map((user: any) => user.email);

          await sendEmail(email_content, user_emails);
        };

        return updated_product;
      }),
    );
    return NextResponse.json({ message: "🎉 Product updated successfully", data: updated_products });
  } catch (error: any) {
    throw new Error(`❌Failed to get all products: ${error.message}`);

  }
}
