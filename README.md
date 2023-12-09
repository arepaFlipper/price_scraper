# e-Commerce Price scrapper
## Overview

Welcome to the e-Commerce Price Tracker repository! This project monitors the actions of platforms such as Amazon and provides you with the latest price of the products you are looking for.
And it gives users precisely when it's the optimal moment to make a purchase.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## (18:00) Project Setup

```bash
❯ npx create-next-app@latest ./
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
✔ What import alias would you like configured? … @/*
Creating a new Next.js app in /home/tovar/Documents/yt-tutos/js_mastery/pricewise/main.

Using npm.

Initializing project with template: app-tw


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- autoprefixer
- postcss
- tailwindcss


added 119 packages, and audited 120 packages in 14s

21 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Success! Created main at /home/tovar/Documents/yt-tutos/js_mastery/pricewise/main

```

## Repository Setup
On GitHub:
```bash
❯ Settings ❯ Branches: (https://github.com/arepaFlipper/price_scrapper/settings/branch_protection_rules/new )
❯ Branch name pattern: ^(main|master)$ ❯ Protect matching branches ❯ Require a pull request before merging.
❯ Require status checks to pass before merging.
```

## (27:11) Unzip the static files
```bash
❯ wget https://drive.google.com/file/d/1v6h993BgYX6axBoIXFbZ9HQAgqbR4PSH/view?pli=1
❯ unzip public.zip -d public
```

### add the `favicon.ico` file
It is mandatory to add it at one folder only, either public/ or app/ but not in both.


In this project I learned:
- What web scraping really is.
- Build a tool to leverage it.
- Handling `CAPTCHA`s.
- Anti-scraping measures.
- IP rotation.

### Crawlers vs Scrappers
| Aspect  | Web Crawlers   | Web Scraper   |
|-------------- | -------------- | -------------- |
| Main function    | Navigates the web, indexes content     | Extracts specific data from web pages |
| Navigation | Follows links to discover new pages| Targets individual pages for data extraction.|
| Usage | SEO analysis | - Any piece of data <br> - Dataset generation for ML training |

#### Web crawlers
Is what Google Chrome or other browsers use to index websites, they
too navigate through out whole website first find links and rank them
accordingly.

#### Web scraping
It targets specific types of websites on their page, it's more about 
focusing on what truly matters.

##### How do web scrapers truly work?
1. Send HTTP request (automatic).
2. Server Replies to our scrapers request with the website content (HTML, JavaScript, CSS).
3. Parse the Response.
4. Filter the desired data.
5. Store the extracted data in a database.
6. Use it for training ML models or building new apps.

## Features

    Multi-Site Support: Track prices across popular eCommerce platforms.
    User-Friendly Interface: Intuitive design for easy navigation.
    Price History: View historical price data to make informed purchasing decisions.
    Email Notifications: Receive alerts when prices drop to your specified threshold.
    Customizable Settings: Tailor the tracker to suit your preferences and needs.

## (1:09:32) BrightData proxy configuration


## (1:11:10) (1:53:00) Environment Variables

In `MongoDB` you get the URI by selecting `connect ❯ MongoDB Driver`, and the URI is something like:

```
mongodb+srv://<username>:<password>@pricescrapper.lw8rqio.mongodb.net/?retryWrites=true&w=majority
```

## (1:14:10) Install axios
Axios is a library for making HTTP requests in Node.js and React.
```bash
❯ npm install axios
```
## (1:14:44) Install cheerio
Cheerio is a library for parsing HTML and extracting data from it.
```bash
❯ npm install cheerio



```
The following is an example of how cheerio is used to scrape the amazon product page:
```html
 <h1 id="title" class="a-size-large a-spacing-none"> 
   <span id="productTitle" class="a-size-large product-title-word-break">YMDK 120 Keys ABS ANSI ISO 1.5mm Blank Milk Fog OEM Profile Shine Through Keycap for MX Mechanical Keyboard RGB GK61 96 84 68 108 87</span>     
 </h1> 
```

To extract the text content of the element, we can use the following code:
```js
    const $ = cheerio.load(response.data);
    const title = $("#productTitle").text().trim();
```

It search for the element with the id of "productTitle" in the HTML document and returns the text content of that element.

Be aware that sometimes Amazon prompts the previous prices to show the discounted price, this could confuse the data extraction.


# Contributing

We welcome contributions from the community! If you have any ideas for improvements, bug reports, or new features, please open an issue or submit a pull request.
# License

This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgments

    Thanks to JavaScript Mastery for the helpful tutorial.

Feel free to reach out if you have any questions or need assistance. Happy shopping and tracking! 🛍️✨
