const { Builder, Capabilities, By } = require("selenium-webdriver");
const { After, AfterAll, Given, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");

const colorMap = {
  Green: "rgba(0, 128, 0, 1)",
  Red: "rgba(255, 0, 0, 1)",
  Purple: "rgba(128, 0, 128, 1)",
};

// driver setup
const driver = new Builder({
  hostname: "localhost",
  port: 4444,
  path: "/wd/hub",
})
  .withCapabilities(Capabilities.chrome())
  .build();

Given("I am on the home page", function () {
  driver.get("localhost:3000/");
});

Then("I should see the default title", function () {
  driver.findElement(
    By.xpath(`.//*[text()[contains(.,'Welcome to the site.')]]`)
  );
});

Then("I should see the default second header", function () {
  driver.findElement(
    By.xpath(
      `.//*[text()[contains(.,"I'll be checking for unique text values.")]]`
    )
  );
});

Then("I should see the default third header", function () {
  driver.findElement(
    By.xpath(
      `.//*[text()[contains(.,"And confirming that I can change things.")]]`
    )
  );
});

Then("I should not see the default third header", function () {
  const changingHeader = driver.findElement(By.id("changing-header")).getText();
  expect(changingHeader).to.not.equal(
    "And confirming that I can change things."
  );
});

Then("I should see the text input field", function () {
  driver.findElement(By.id("textbox"));
});

Then("I should see the dropdown menu for color", function () {
  driver.findElement(By.id("selector"));
});

Then("I should see the button to change text", function () {
  driver.findElement(By.id("submit"));
});

Then(
  "I should change the text in the third header to {string}",
  function (string) {
    const input = driver.findElement(By.id("textbox"));
    input.sendKeys(string);
  }
);

Then(
  "I want to select the color {string} from the drop down",
  function (string) {
    const dropDown = driver.findElement(By.id("selector"));
    dropDown.click();
    dropDown.sendKeys(string);
    dropDown.click();
  }
);

Then("I should submit the changes", function () {
  driver.findElement(By.id("submit")).click();
});

Then("I should see the text {string}", async function (string) {
  await driver.findElement(By.xpath(`.//*[text()[contains(.,'${string}')]]`));
});

Then(
  "I should make sure the third header is {string}",
  async function (string) {
    const color = await driver
      .findElement(By.id("changing-header"))
      .getCssValue("color");
    expect(color).to.equal(colorMap[string]);
  }
);

// Take a screenshot of the browser state on failure.
After(async function (scenario) {
  if (scenario.result.status !== 1) {
    driver.takeScreenshot().then(function (image, err) {
      const fileName = `bdd/errorScreenshots/Error_${Date.now()}.png`;
      require("fs").writeFile(fileName, image, "base64", function (err) {
        console.log(err);
      });
    });
  }
});

AfterAll(function () {
  driver.quit();
});
