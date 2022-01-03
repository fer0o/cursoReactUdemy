// promeas en js
// las promesas son asincronas, primero se va a ejecutar todo el codigo que es sincrono secuencia y las promesas son ejecutadas al final de lo sincrono 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

// // las promesas funcionan con un callback
// // resolve: se ejecuta cuando la promesa es exitosa
// reject se ejecyuta cuando no se pudo resolver la promesa 
import { getHeroesbyId } from "./bases/08-imp-exp"

// const promesa = new Promise ((resolve, reject)=>{
//     setTimeout (()=>{
//         //resolve()
//         const heroe = getHeroesbyId (2)
//         //console.log(heroes)
//         resolve(heroe)
//         //reject ('No se pudo encontra el heroe')
//     },2000)
// })

// // }) 
// // metodos importantes
// // then -> la promesa se hizo correctamente
// // catch -> hubo un error
// // finally -> despues del then y del catch
// promesa.then((heroe)=>{
//     console.log( 'heroe', heroe)
// })
// .catch(err => console.warn(err))


// esta funcion recibe el id del heroe que voy a buscar
const getHeroesbyIdAsync = (id)=>{
    const promesa = new Promise (( resolve, reject)=>{

        setTimeout (()=>{
            const p1 = getHeroesbyId(id)
            if(p1){
                resolve(p1)
            }
            else{
                reject('No se pudo encontrar el heroe')
            }
            
        },2000)
    })
    return promesa

}

getHeroesbyIdAsync (11)
.then (heroe => console.log('Heroe', heroe))
.catch( err => console.warn(err))