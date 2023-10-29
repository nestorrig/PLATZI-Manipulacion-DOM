const url = 'https://platzi-avo.vercel.app'
const appNode = document.querySelector('#app')
const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'GBP',
    }).format(price)

    return newPrice
}

window.fetch(`${url}/api/avo`)
    .then((respuesta) => respuesta.json())

    .then((respuestaJson) => {

        console.log(respuestaJson);

        const allItems = []

        respuestaJson.data.forEach(item => {
            console.log(item.name);

            const image = document.createElement('img')
            image.src = `${url}${item.image}`

            const name = document.createElement('h2')
            name.textContent = item.name

            const price = document.createElement('p')
            price.textContent = formatPrice(item.price)

            const container = document.createElement('div')
            container.append(image, name, price)

            allItems.push(container)

        })
        appNode.append(...allItems)
    })

/** CON ASYNC y AWAIT

const url = "https://platzi-avo.vercel.app/api/avo";

//web api
async function fetchData() {
    const response = await fetch(url),
    data = await response.json(),
    allItems = [];

    data.data.forEach((item) => {
        // create image
        const image = document.createElement("img");
        // create title
        const title = document.createElement("h2");
        // create price
        const price = document.createElement("div");

        const container = document.createElement("div");
        container.append(image, title, price);

        allItems.push(container);
    });

    document.body.append(...allItems)
}

fetchData();



 */