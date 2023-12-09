"use server"

import { revalidatePath } from "next/cache";
import { connectToDB } from "@/lib/mongoose";
import { scrapeAmazonProduct } from "@/lib/scraper";
import Product from "@/lib/models/product.model";
import { getLowestPrice, getHighestPrice, getAveragePrice } from "@/lib/utils";

export const scrapeAndStoreProduct = async (productUrl: string) => {
  if (!productUrl) return;

  try {
    connectToDB();
    const scrapedProduct = await scrapeAmazonProduct(productUrl);
    if (!scrapedProduct) return;

    let product = scrapedProduct;
    const existing_product = await Product.findOne({ url: scrapedProduct.url });

    if (existing_product) {
      const updatedPriceHistory: any = [...existing_product.priceHistory, { price: scrapedProduct.currentPrice }]

      product = { ...scrapedProduct, priceHistory: updatedPriceHistory, lowestPrice: getLowestPrice(updatedPriceHistory), highestPrice: getHighestPrice(updatedPriceHistory), averagePrice: getAveragePrice(updatedPriceHistory) };
    }

    const newProduct = await Product.findOneAndUpdate({ url: scrapedProduct.url }, product, { upsert: true, new: true });

    revalidatePath(`/products/${newProduct._id}`);

    return existing_product;
  } catch (error: any) {
    throw new Error(`Failed to create/update product: ${error.message}`);
  }
}
