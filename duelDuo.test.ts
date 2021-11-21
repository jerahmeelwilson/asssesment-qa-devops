import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get("http://localhost:3000/");
});

afterAll(async () => {
  driver.quit();
  await driver.sleep(4000);
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  const displayed = await title.isDisplayed();
  await driver.sleep(2000);
  expect(displayed).toBe(true);
});

test("Draw buttons displays list of Duo Bots", async () => {
  await driver.findElement(By.id("draw")).click();
  const choice = await driver.findElement(By.id("choices"));
  const displayed = await choice.isDisplayed();
  await driver.sleep(2000);
  expect(displayed).toBe(true);
});

test("Add to Duo button displays player choices section", async () => {
  await driver.findElement(By.id("draw")).click();
  await driver.sleep(2000);
  await driver
    .findElement(By.xpath(`//*[@id="choices"]/div[1]/button`))
    .click();
  const player = await driver.findElement(By.id("player-duo"));
  const displayed = await player.isDisplayed();
  await driver.sleep(2000);
  expect(displayed).toBe(true);
});
