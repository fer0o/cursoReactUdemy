

//objetos literales


const persona ={
    nombre: 'Tony',
    apellido :'Stark',
    edad:45,
    direccion:{
        ciudad:'New York',
        zipcode:5522377,
        lat:1231234,
        lng:123133
    },
}
//clonar la tabla de persona y asignarle nuevos valores

const persona2 ={...persona}
//con los 3 puntos se hace una copia con referente a la constante que se quiera copiar, en este caso persona
//aqui es donde se le da nuevos valores con base a persona
persona2.nombre ='Peter'
persona2.apellido='Parker'

console.log(persona)
console.log(persona2)