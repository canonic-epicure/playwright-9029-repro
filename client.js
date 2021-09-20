import { it } from 'https://cdn.jsdelivr.net/npm/@bryntum/siesta@latest/index.js'

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    document.body.innerHTML = '<iframe></iframe>';

    const frame = document.querySelector('iframe')

    frame.addEventListener('load', () => console.log("FRAME LOADED"))

    frame.src = "https://www.theworldsworstwebsiteever.com/"
} else {
    console.log("NOT LOADED")
}
