const puppeteer = require('puppeteer-core');
const fs = require('fs-extra');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setContent(`<h1>Hello World !</h1>`);
        await page.emulateMedia('screen');
        await page.pdf({
            path: 'output.pdf',
            format: 'A4',
            printBackground: true
        });

        console.log('PDF printing done');
        await browser.close();
        process.exit();
    } catch (error) {
        console.log(error);
    }
})();