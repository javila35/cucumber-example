const { Builder, Capabilities, By } = require('selenium-webdriver')
const { After, AfterAll, Given, When, Then } = require('@cucumber/cucumber')
const { text } = require('express')
// require('chromedriver')

// driver setup
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

Given('I am on the home page', async function () {
    await driver.get('localhost:3000/')
})

Then('I should see the default title', async function () {
    await driver.findElement(By.xpath(`.//*[text()[contains(.,'Welcome to the site.')]]`))
})

Then('I should see the second header', async function () {
    await driver.findElement(By.xpath(`.//*[text()[contains(.,"I'll be checking for unique text values.")]]`))
})

Then('I should see the third header', async function () {
    await driver.findElement(By.xpath(`.//*[text()[contains(.,"And confirming that I can change things.")]]`))
})

Then('I should see the text input field', async function () {
    await driver.findElement(By.id('textbox'))
})

Then('I should see the dropdown menu for color', async function () {
    await driver.findElement(By.id('selector'))
})

Then('I should see the button to change text', async function () {
    await driver.findElement(By.id('submit'))
})

Then('I should change the text in the third header to {string}', async function (string) {
    const input = await driver.findElement(By.id('textbox'))
    await input.sendKeys(string)
})

Then('I want to select the color {string} from the drop down', async function (string) {
    const dropDown = await driver.findElement(By.id('selector'))
    await dropDown.click()
    await dropDown.sendKeys(string)
    await dropDown.click()
})

Then('I will click the button to change the text', async function () {
    await driver.findElement(By.id('submit')).click()
})

// Take a screenshot of the browser state on failure.
After(async function (scenario) {
    if (scenario.result.status !== 1) {
        driver.takeScreenshot()
        .then(function (image, err) {
            const fileName = `bdd/errorScreenshots/Error_${Date.now()}.png`
            require('fs').writeFile(fileName, image, 'base64', function(err) {
                console.log(err)
            })
        })
    }
})

AfterAll(async function () {
    await driver.quit()
})