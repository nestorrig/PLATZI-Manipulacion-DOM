console.log('hola page');

const url = 'https://platzi-avo.vercel.app/api/avo'

window.fetch(url)
    .then((respuesta) => respuesta.json())

    .then((respuestaJson) => {

        console.log(respuestaJson);

        const allItems = []

        respuestaJson.data.forEach(item => {
            console.log(item.name);

            const image = document.createElement('img')
            
            const name = document.createElement('h2')
            
            const price = document.createElement('p')
            
            const container = document.createElement('div')

            container.append(image, name, price)
            allItems.push(container)

        })
        document.body.append(...allItems)
    })