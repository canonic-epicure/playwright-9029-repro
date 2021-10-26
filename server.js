import playwright from "playwright";
import { startDevServer } from "@web/dev-server"

export const delay = (timeout) => new Promise(resolve => setTimeout(() => resolve(), timeout))

const run = async () => {
    const webServer         = await startDevServer({
        config : {
            nodeResolve : true
        },
        logStartMessage     : false
    })

    const address           = webServer.server.address()
    const webPort           = address.port

    //---------------------------
    // const browser   = await playwright.chromium.launch({ headless: false });
    const browser   = await playwright.firefox.launch({ headless: false });
    // const browser   = await playwright.webkit.launch({ headless: false });

    const context   = await browser.newContext()
    const page      = await context.newPage();

    page.on('console', e => console.log(e))

    await page.goto(`http://localhost:${ webPort }`);

    const locator = page.locator('#input')
    await locator.type('press any key')

    await delay(3000)

    await locator.type('more text')
};

run();

