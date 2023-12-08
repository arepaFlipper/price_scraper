"use client"
import { useState, ChangeEvent, FormEvent } from "react";

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

  const handle_submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValidLink = isValidAmazonProductURL(searchPrompt);
    alert(isValidLink ? "Valid link" : "Invalid link");
  };

  const on_change = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchPrompt(event.target.value);
  };
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handle_submit}>
      <input type="text" value={searchPrompt} onChange={on_change} placeholder="Enter product link" className="searchbar-input" />
      <button type="submit" className="searchbar-btn">
        Search
      </button>
    </form>
  )
}

export default SearchBar
