// Desestructuracion de objetos
//asignacion desestructurante

const persona = {
    nombre:'Tony',
    edad: 45,
    clave: 'Ironman'

}
// const {nombre, edad, clave}= persona

// console.log(edad)

// const retornaPersona = (usuario)=>{
//     return(
//         console.log(usuario)
//     )
// }
// retornaPersona (persona)

const useContext = ({clave, nombre, edad, rango = 'capitan'})=>{
    return{
        nombreClave:nombreClave,
        anios:edad, 
        latlng:{
            lat: 14.32323,
            lng: -12.1233
        }
    }
}
//  console.log(retornaPersona(persona))
const {nombreClave, anios} = useContext (persona)
console.log(nombreClave, anios)