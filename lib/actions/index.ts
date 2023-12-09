"use server"

import { connectToDB } from "@/lib/mongoose";
import { scrapeAmazonProduct } from "@/lib/scraper";

export const scrapeAndStoreProduct = async (productUrl: string) => {
  if (!productUrl) return;

  try {
    connectToDB();
    const scrapedProduct = await scrapeAmazonProduct(productUrl);
    if (!scrapedProduct) return;

    return scrapedProduct;
  } catch (error: any) {
    throw new Error(`Failed to create/update product: ${error.message}`);
  }
}
