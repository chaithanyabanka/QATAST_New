import { test, expect } from '@playwright/test';
import {CalHolidayHomePage} from '../pages/CalHoliday.page';
import { DoesTheEmployeeWorkPage } from '../pages/DoestheEmployeework.page';
import { IsTheHolidayEntitlementPage } from '../pages/IsTheHolidayEntitlement.page';
import { DoYouWantToWorkPage } from '../pages/DoYouWantToWork.page';
import {NumberOfDaysWorkedPage} from '../pages/NumberOfDaysWorked.page';
import {OutcomePage} from '../pages/Outcome.page';


import testData from '../data/testData.json' assert { type: 'json' };

test.beforeEach(async ({}, testInfo) => {
  console.log(`Starting test: ${testInfo.title}`);
});

test.afterEach(async ({}, testInfo) => {
  console.log(`Finished test: ${testInfo.title} - Status: ${testInfo.status}`);
  if (testInfo.status !== 'passed') {
    console.log('Test failed! Check trace and screenshots.');
  }
});


test.describe('Calculate Holiday Entitlement - Dynamic Happy Path', () => {
   for (const { daysWorked,entitlementBasis,leaveYearOption, expectedEntitlement } of testData) {

  test('GOV.UK: Calculate your holiday entitlement for Days worked: ' + daysWorked + ' Entitlement : '+ entitlementBasis, async ({ page }) => {
  const calcPage = new CalHolidayHomePage(page);
  const doestheEmployeeworkPage = new DoesTheEmployeeWorkPage(page);
  const isTheHolidayEntitlementPage = new IsTheHolidayEntitlementPage(page);
  const doYouWantToWorkPage = new DoYouWantToWorkPage(page);
  const numberOfDaysWorkedPage = new NumberOfDaysWorkedPage(page);
  const outcomePage = new OutcomePage(page);

  // Start of the test flow
  await calcPage.goto();
  await expect(calcPage.isHeadingVisible()).toBeTruthy();
  await calcPage.clickStartNow();

  // Does the employee work page
  await expect(doestheEmployeeworkPage.isHeadingVisible()).toBeTruthy();
  await expect(doestheEmployeeworkPage.heading).toBeVisible();
  await doestheEmployeeworkPage.clickNo();
  await doestheEmployeeworkPage.clickContinue();

  // Is the holiday entitlement page
  await expect(isTheHolidayEntitlementPage.isHeadingVisible()).toBeTruthy();
  await expect(isTheHolidayEntitlementPage.heading).toBeVisible();
  await isTheHolidayEntitlementPage.selectHolidayEntitlementOption(entitlementBasis);
  await isTheHolidayEntitlementPage.clickContinue();

  // Do you want to work page
  await expect(doYouWantToWorkPage.isHeadingVisible()).toBeTruthy();
  await expect(doYouWantToWorkPage.heading).toBeVisible();
  await doYouWantToWorkPage.selectDoYouWantToWorkOption(leaveYearOption);
  await doYouWantToWorkPage.clickContinue();

  // Number of days/hours worked page
  await expect(numberOfDaysWorkedPage.isHeadingVisible()).toBeTruthy();
  await expect(numberOfDaysWorkedPage.heading).toBeVisible();
  await numberOfDaysWorkedPage.enterNumberOfDaysWorked(daysWorked);
  await numberOfDaysWorkedPage.clickContinue();

  // Outcome page
  await expect(outcomePage.isHeadingVisible()).toBeTruthy();
  await expect(outcomePage.heading).toBeVisible();
  const resultText = await outcomePage.getResultInfoText();
  await expect(resultText).toContain(`The statutory holiday entitlement is ${expectedEntitlement} days holiday.`);

  
  await console.log('Test completed successfully');

  });
}
});
