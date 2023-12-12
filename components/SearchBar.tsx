"use client"
import { useState, ChangeEvent, FormEvent } from "react";
import { scrapeAndStoreProduct } from "@/lib/actions";

type TSearchBar = {}

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if (hostname.includes('amazon.com') || hostname.includes('amazon.') || hostname.endsWith('amazon')) {
      return true;
    }

  } catch (error) {
    return false;

  }

}

const SearchBar = ({ }: TSearchBar) => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handle_submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValidLink = isValidAmazonProductURL(searchPrompt);
    if (!isValidLink) {
      return alert('Please provide a valid Amazon product link');
    }

    try {
      setIsLoading(true);

      // Scrape the product page
      const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {

    } finally {
      setIsLoading(false);
    }
  };

  const on_change = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchPrompt(event.target.value);
  };
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handle_submit}>
      <input type="text" value={searchPrompt} onChange={on_change} placeholder="Enter product link" className="searchbar-input" />
      <button type="submit" className="searchbar-btn" disabled={searchPrompt === ""}>
        {(isLoading ? "Searching..." : "Search")}
      </button>
    </form>
  )
}

export default SearchBar
