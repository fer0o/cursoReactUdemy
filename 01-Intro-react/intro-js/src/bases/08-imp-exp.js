//import {heroes} from '../src/data/heores'
import heroes, {owners} from '../data/heroes'
//console.log(owners)

// const getHeroesbyId = (id) =>{
//     return heroes.find( (heroe)=>{
//         if(heroe.id === id){
//             return true
//         }
//         else{
//             return false
//         }
//     })
// }
 export const getHeroesbyId = (id) =>{
    return heroes.find((heroe) => heroe.id === id)
}
//console.log(getHeroesbyId(2))


 export const getHeroesbyOwner = (owner) => heroes.filter((heroe)=> heroe.owner === owner)

//console.log(getHeroesbyOwner('Marvel'))
