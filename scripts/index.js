import { generateTagsString } from "../src/utils.js";

function app() {
    const name = document.querySelector('.about > h1')
    const tags = document.querySelector('.about > p')
    tags.innerText = generateTagsString()
}

app();