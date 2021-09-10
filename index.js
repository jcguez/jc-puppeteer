const browserObject = require('./browser')
const scraperController = require('./pageController')
const todoistScraperController = require('./todoistController')

// Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser()

// Pass the browser instance to the scraper controller
scraperController(browserInstance)
  .then(function (data) {
    // Pass the browser instance to the todoist scraper controller
    todoistScraperController(browserInstance, data)
      .then(function (info) {
        console.log('Result => ', info)
      })
      .catch(function (err) {
        console.log('Error => ', err)
      })
  })
  .catch(function (err) {
    console.log('Error list => ', err)
  })
