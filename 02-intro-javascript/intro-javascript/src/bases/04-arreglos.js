//Arreglos en JS
// coleccion de información que esta en uan variable
//el push modifica el arreglo en general
//se va a utilizar el spread extraer la info del arreglo y manda la info individual de cada arreglo


// cuando se requiera regresar un objeto con funcion flecha se descarta el return y debido a que se quiere regresar como objeto despues de la flecha gorda se indica el return del objeto todo dentro de parentesis
const arreglo = [1,2,3,4]
//arreglo.push(1)

let arreglo2= [...arreglo,5]
//arreglo2.push(5)
//callback
const arreglo3 = arreglo2.map(function(numero){
    return(
        numero*2
    )

})



console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)