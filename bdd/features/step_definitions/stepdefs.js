import { Builder } from 'selenium-webdriver'
import { After, AfterAll, Given, When } from '@cucumber/cucumber'
require('chromedriver')

// driver setup
const driver = new Builder().forBrowser('chrome').build()

Given('I am on the home page', function () {
    driver.get('file:///Users/joe/Development/practice/cuc-test/src/index.html')
})

AfterAll(async function () {
    await driver.quit()
})


// Take a screenshot of the browser state on failure.
After(async function (scenario) {
    if (scenario.result.status !== 1){
        const image = await driver.takeScreenshot()
        const fileName = `errorScreenshots/Error_${Date.now()}.png`
        require('fs').writeFile(fileName, image)
    }
})