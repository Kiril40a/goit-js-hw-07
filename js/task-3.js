const input = document.querySelector("#name-input")
let span = document.querySelector('#name-output') 

input.addEventListener('input', (e) => {
    span.innerText = e.target.value.trim();
    if (e.target.value.trim() === "") {
        span.innerText = "Anonymous"
    }
})