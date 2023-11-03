const isIntersecting = entry => {
    return entry.isIntersecting
}
const loadImage = (entry) => {
    const image = entry.target
    const url = image.dataset.src
    console.log(url);
    image.src = url
    // deja de ver el image una ves que ya fue registrado
    observer.unobserve(image)
}
const observer = new IntersectionObserver( entries => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})
export const registerImage = image => {
    observer.observe(image)
}
//menor codigo en: https://platzi.com/comentario/2524515/