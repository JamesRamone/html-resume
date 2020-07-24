const puppeteer = require('puppeteer');

async function pdf() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // Change the url to match your dev server address
  await page.goto('http://resume.test', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'Résumé.pdf', format: 'A4', printBackground: true, pageRanges:'1'});
  await browser.close();
};

pdf();

module.exports = pdf;