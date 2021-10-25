import playwright from "playwright";
import { startDevServer } from "@web/dev-server"

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
    const browser   = await playwright.firefox.launch({ headless: false });
    const context   = await browser.newContext()
    const page      = await context.newPage();

    page.on('console', e => console.log(e))

    await page.goto(`http://localhost:${ webPort }`);

    await page.click('#input')

    console.log("Typing")

    await page.keyboard.down('Meta')

    await page.keyboard.type('z')

    await page.keyboard.up('Meta')

    await browser.close()
    await webServer.stop()
};

run();

