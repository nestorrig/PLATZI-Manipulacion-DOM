import { registerImage } from "./lazy.js";
import { foxReady } from "./lazy.js";
import { restarValue } from "./lazy.js";
const imagesContainer = document.querySelector('#Container')


const min = 1
const max = 123
const fox = () => Math.floor(Math.random() * (max - min) + min)

export let foxWaiting = 0


document.querySelector('#Add').addEventListener('click', () => {
    const img = document.createElement('img')
    // img.src = `https://randomfox.ca/images/${fox()}.jpg`
    // img.loading = 'lazy'
    img.dataset.src = `https://randomfox.ca/images/${fox()}.jpg`
    foxWaiting++

    const div = document.createElement('div')
    div.className ='img-pic'
    div.append(img)

    
    imagesContainer.appendChild(div)
    // añadimos la imagen al registro
    registerImage(div)
})
document.querySelector('#Delete').addEventListener('click', () => {
    foxWaiting = 0
    restarValue()

    imagesContainer.innerHTML = ''
    console.log('---------------------------------------------------');
    console.log(`+ ahora hay ${foxWaiting} zorros esperando por cargar`);
    console.log(`* ahora hay ${foxReady} zorros cargados`);

})