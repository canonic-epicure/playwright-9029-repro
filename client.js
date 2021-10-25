const input     = document.getElementById('input')

input.addEventListener('keydown', e => {
    console.log("HAS META: ", e.metaKey)
})

console.log("Subscription set")
