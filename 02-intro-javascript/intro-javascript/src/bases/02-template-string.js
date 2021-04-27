

//concatenar strings
//template strings

const nombre ='Fernando'
const apellido = 'Medellin'
const NombreCompleto = `${nombre} ${apellido}`

console.log(NombreCompleto)


function getSaludo(nombre){
    return ' Hola ' + nombre
}

console.log (` Este es un texto: ${getSaludo(nombre)} `)
