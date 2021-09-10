const todoistScraperObject = {
  url: 'https://todoist.com/users/showlogin',
  async scraper(browser, data){
    try {
      let page = await browser.newPage()
      console.log(`Navigating to ${this.url}...`)
      await page.goto(this.url)
      // Wait for the required DOM to be rendered
      await page.waitForSelector('.field')

      await page.type('#email', 'carlos.rguezgtz@gmail.com')
      await page.type('#password', 'mUNfdi55ma5UWCx')
      await page.click('.submit_btn')
      await page.waitForSelector('.view_content section .items li.controller.actions.task_actions.full_width_actions ')
      console.log('Selector ready')
      await page.click('button.plus_add_button')
      console.log('Clicked selector')

      for await (const iterator of data) {
        await page.waitForSelector('.public-DraftStyleDefault-block')
        await page.type('.public-DraftStyleDefault-block', iterator.title)
        await page.waitForSelector('.task_editor__description_field')
        await page.type('.task_editor__description_field', iterator.description)
        await page.click('.reactist_button--primary')
      }
      return 'Success'
    } catch (error) {
      console.log('Todoist scraper error => ', error)
      return 'Error'
    }
  }
}

module.exports = todoistScraperObject
