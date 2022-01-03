// Funciones en Js

const saludar = function (nombre){
    return(
        `Hola, ${nombre}`
    )
}

console.log(saludar('Al paccino'))


//tarea
//1. Transformen a una funcion flecha
//2. tiene que retornar un objeto implicito
//pruebas

// function getUsuarioActivo (nombre){
//     return{
//         uid:'ADBS',
//         username : nombre
//     }
// }
const getUsuarioActivo = (nombre)=>{
    return{
        uid:'ABDKJF',
        username:nombre
    }
}
const usuarioActivo = getUsuarioActivo('Fernando')
console.log(usuarioActivo)

