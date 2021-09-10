const todoistScraper = require('./todoistScraper')

async function scrapeAll(browserInstance, data) {
  let browser
  try {
    browser = await browserInstance
    return await todoistScraper.scraper(browser, data)
  } catch (err) {
    console.log('Could not resolve the browser instance => ', err)
  }
}

module.exports = (browserInstance, data) => scrapeAll(browserInstance, data)
