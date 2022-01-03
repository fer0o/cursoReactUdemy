// Template Strings es el uso de backticks y uso del llamado de const de js

const nombre = "Fernando"
const apellido = "Medellin"

// const nombreComplet = nombre +" "+ apellido
const nombreComplet = `Hola mundo 
    ${nombre}
    ${apellido}`
console.log(nombreComplet)

function getSaludo(nombre){
    return(
        `Hola ` + nombre
    )

}
console.log(`Este es un texto ${getSaludo(nombre)}`)