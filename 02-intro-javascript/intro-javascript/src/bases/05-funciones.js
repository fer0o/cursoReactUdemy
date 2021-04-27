//funciones

const saludar =function saludar(nombre){
    return(
    `Hola, ${nombre}`
    )
}


//funcion flecha
const saluadar2 = (nombre)=>{
    return(
        `Hola, soy, ${nombre}`
    )
}
const saludar4 = ()=> `Hola mundo`

console.log(saludar('Goku'))
console.log(saluadar2('Vegeta'))
console.log(saludar4())

//tarea
//1.- Transformar en una funcion flecha
//2.- TIene que retornar un valor implicito (para eso se tiene que usar modificacion del return)
//3.- Prueba


const getUsuarioActivo = (nombre) =>({
    
        uid:'Aasd',
        user: nombre
    })

const usuarioActivo = getUsuarioActivo('Fernando')
console.log(usuarioActivo)


const getUsuario2 = (nombre)=>({
    uid2:'asjdlj',
    user2:nombre
    
    
})
const usuarioActivo2 = getUsuario2('El ricky')
console.log(usuarioActivo2)
