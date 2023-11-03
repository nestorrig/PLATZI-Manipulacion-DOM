import { foxWaiting } from "./index.js"


const isIntersecting = entry => {
    return entry.isIntersecting
}
export let foxReady = 0

const loadImage = (entry) => {
    const container = entry.target
    const image = container.firstChild
    const url = image.dataset.src
    image.src = url
    foxReady++

    console.log('---------------------------------------------------');
    console.log(`+ ahora hay ${foxWaiting} zorros esperando por cargar`);
    console.log(`* ahora hay ${foxReady} zorros cargados`);


    // console.log(`ahora hay ${foxReady} zorros cargados`);
    // deja de ver el image una ves que ya fue registrado
    observer.unobserve(container)
}
const observer = new IntersectionObserver( entries => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})
export const registerImage = image => {
    observer.observe(image)
    console.log('---------------------------------------------------');
    console.log(`+ ahora hay ${foxWaiting} zorros esperando por cargar`);
    console.log(`* ahora hay ${foxReady} zorros cargados`);
}
//menor codigo en: https://platzi.com/comentario/2524515/


export const restarValue = () => {
    foxReady = 0
}