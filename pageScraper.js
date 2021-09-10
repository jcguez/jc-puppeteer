const scraperObject = {
  url: 'https://randomtodolistgenerator.herokuapp.com/library',
  async scraper(browser){
    let page = await browser.newPage()
    console.log(`Navigating to ${this.url}...`)
    await page.goto(this.url)
    // Wait for the required DOM to be rendered
    await page.waitForSelector('.tasks-card-container')
    // Get the title to all the required tasks
    let tasks = await page.$$eval('.tasks-card-container .taskCard', tasks => {
      // Extract the titles from the data
      tasks = tasks.map(el => {
        return {
          title: el.querySelector('.task-title > div').innerText,
          description: el.querySelector('.card-text').innerText
        }
      })
      return tasks
    })
    return tasks
  }
}

module.exports = scraperObject
