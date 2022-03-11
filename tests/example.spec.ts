import { expect, test } from '@playwright/test';

const PAGE_URL = 'https://www.amcharts.com/demos/pie-chart/';
const CHART_SELECTOR = '#chartdiv';

test.beforeEach(async ({ page }) => {
  await page.goto(PAGE_URL);
});

test.describe('Chart testing', () => {
  test('should test that images are equal in head/headless modes', async ({ page, browserName, headless }) => {
    await sleep(5000);    
    const screenshot = await page.locator(CHART_SELECTOR).screenshot();
    expect(screenshot).toMatchSnapshot(`myChartSnapshot-${browserName}`);
  });
});

/**
 * Aux function to wait until chart is fully loaded
 * @param ms Milliseconds to wait
 * @return Promise resolving when timeout is done 
 */
function sleep(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}