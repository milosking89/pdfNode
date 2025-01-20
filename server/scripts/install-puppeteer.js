// CommonJS Script (your-script.js)
(async () => {
    const { downloadBrowsers } = await import('puppeteer/lib/install/install.mjs');

    try {
        await downloadBrowsers();
        console.log('Browsers downloaded successfully.');
    } catch (error) {
        console.error('Error downloading browsers:', error);
        process.exit(1);
    }
})();