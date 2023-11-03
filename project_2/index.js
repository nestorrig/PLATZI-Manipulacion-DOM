import { registerImage } from "./lazy.js";

const imagesContainer = document.querySelector('#Container')

const min = 1
const max = 123
const fox = () => Math.floor(Math.random() * (max - min) + min)

document.querySelector('button').addEventListener('click', () => {
    const img = document.createElement('img')
    img.src = `https://randomfox.ca/images/${fox()}.jpg`
    console.log(img.src);
    imagesContainer.appendChild(img)
    // añadimos la imagen al registro
    registerImage(img)
})