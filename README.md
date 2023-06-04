# e-Commerce Price scrapper
## Overview

Welcome to the e-Commerce Price Tracker repository! This project monitors the actions of platforms such as Amazon and provides you with the latest price of the products you are looking for.
And it gives users precisely when it's the optimal moment to make a purchase.

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


# Contributing

We welcome contributions from the community! If you have any ideas for improvements, bug reports, or new features, please open an issue or submit a pull request.
# License

This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgments

    Thanks to JavaScript Mastery for the helpful tutorial.

Feel free to reach out if you have any questions or need assistance. Happy shopping and tracking! 🛍️✨
