//desestruturacion 
//asignacion desesctruturante

const persona={
    nombre :'Tony',
    edad: 44,
    clave: 'Ironma'
}
//extrae solo lo que quiero de ese objeto
const {nombre,edad} = persona
console.log(nombre,edad )