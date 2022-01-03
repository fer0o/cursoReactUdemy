// FETCH API

const apiKey ='z4pZO17j4sAqjAfJc8MS8KSV8whd2fOe'

const baseUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

const peticion = fetch(baseUrl)


// promeasas en cadena
peticion
.then(resp => resp.json())
.then(({data}) =>{
    //console.log(data.images.original.url)
    // const de desustructuracion
    const {url} = data.images.original
    //console.log(url)
    const img = document.createElement ('img')
    img.src = url

    document.body.append (img)
})
.catch (console.warn)