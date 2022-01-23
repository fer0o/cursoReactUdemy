import React, {useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value}) => {


    //hook es nadamas una funcion
    // useState regresa una funcion
    // se hace una desestructuracion const [nombre del primer nombre del arreglo, funcion que se le pone setNombre ]
    const [counter, setCounter] = useState(0) // retorna un arreglo
    
    const handleAdd = (e) =>{
        setCounter(counter + 1)
        
    } 
    return (
        <div>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
        </div>
    )
}
CounterApp.propTypes ={
    vale: PropTypes.number
}

export default CounterApp