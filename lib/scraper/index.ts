import axios from "axios";
import * as cheerio from "cheerio";
import { extractPrice, extractCurrency, extractDescription } from "@/lib/utils";

export const scrapeAmazonProduct = async (url: string) => {
  if (!url) return;

  // curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_b5205650-zone-price_scraper:5up2tvmda8ni -k https://lumtest.com/myip.json

  const username = String(process.env.BRIGHT_DATA_USERNAME);
  const password = String(process.env.BRIGHT_DATA_PASSWORD);
  const port = String(process.env.BRIGHT_DATA_PORT);
  const session_id = (1_000_000 * Math.random()) | 0;

  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: 'brd.superproxy.io',
    port,
    rejectUnauthorized: false,
  };

  try {
    // Fetch the product page
    const response = await axios.get(url, options);
    const $ = cheerio.load(response.data);

    const title = $("#productTitle").text().trim();
    const current_price = extractPrice($('.priceToPay span.a-price-whole'), $('a.size.base.a-color-price'), $('.a-button-selected .a-color-base'), $('.a-price.a-text-price'));
    const original_price = extractPrice($('#priceblock_ourprice'), $('.a-price.a-text-price span.a-offscreen'), $('#listPrice'), $('#priceblock_dealprice'), $('.a-size-base.a-color-price'));
    const out_of_stock = $('#availability span').text().trim().toLowerCase() === "currently unavailable";

    const images = $('#imgBlkFront').attr('data-a-dynamic-image') || $('#landingImage').attr('data-a-dynamic-image') || '{}';
    const image_urls = Object.keys(JSON.parse(images));
    const currency = extractCurrency($('.a-price-symbol'));
    const discount_rate = $('.savingsPercentage').text().replace(/[-%]/g, "");

    const description = extractDescription($);


    const extracted_data = {
      url,
      currency: currency || "USD($)",
      image: image_urls[0],
      title,
      currentPrice: Number(current_price) || Number(original_price),
      originalPrice: Number(original_price) || Number(current_price),
      priceHistory: [],
      discountRate: Number(discount_rate) || 0,
      category: "category",
      reviewsCount: 55,
      stars: 4.9,
      isOutOfStock: out_of_stock,
      description,
      lowestPrice: Number(current_price) || Number(original_price),
      highestPrice: Number(original_price) || Number(current_price),
      averagePrice: Number(current_price) || Number(original_price),
    };
    return extracted_data;

  } catch (error: any) {
    throw new Error(`Failed to scrape product: ${error.message}`);

  }

}
