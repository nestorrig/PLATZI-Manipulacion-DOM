const imagesContainer = document.querySelector('#Container')

let fox = 0




function addNewFox() {
    fox++
    if (fox > 123) {
        return
    }
    const img = document.createElement('img')
    img.src = `https://randomfox.ca/images/${fox}.jpg`

    imagesContainer.appendChild(img)
}

