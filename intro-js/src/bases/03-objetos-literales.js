// objetos literales

// asi es un objeto
const persona ={
    nombre: "Tony",
    apellido : "Stark",
    edad: 45, 
    direccion :{
        ciudad: "NY",
        zip_code: 123324,
        lat: 2938498,
        lng: 298374983, 
    }

}
// para clonar las propiedades del objeto basta con el operador spread 
const persona2 = {...persona}
persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)