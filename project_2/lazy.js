const isIntersecting = entry => {
    return entry.isIntersecting
}
const action = (entry) => {
    const nodo = entry.target
    console.log('holis');
    // deja de ver el nodo una ves que ya fue registrado
    observer.unobserve(nodo)
}
const observer = new IntersectionObserver( entries => {
    entries
        .filter(isIntersecting)
        .forEach(action)
})
export const registerImage = image => {
    observer.observe(image)
}