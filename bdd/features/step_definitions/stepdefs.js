const { Builder, Capabilities, By } = require('selenium-webdriver')
const { After, AfterAll, Given, When, Then } = require('@cucumber/cucumber')
// require('chromedriver')

// driver setup
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

Given('I am on the home page', async function () {
        await driver.get('localhost:3000/')
})

Then('I should see text {string}', async function (string) {
        await driver.findElement(By.xpath(`.//*[text()[contains(.,'${string}')]]`))
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