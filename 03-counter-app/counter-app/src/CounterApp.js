import React, {useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value=10}) => {


    //hook es nadamas una funcion
    // useState regresa una funcion
    // se hace una desestructuracion const [nombre del primer nombre del arreglo, funcion que se le pone setNombre ]
    const [counter, setCounter] = useState(value) // retorna un arreglo
    
    
    const handleAdd = (e) =>{
        setCounter(counter + 1)    
    } 
    const handleSub =(e) =>{
        setCounter (counter -1)
    }
    const reset =(e)=>{
        setCounter (value)
    }

    return (
        <div>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={handleSub}>-1</button>
        </div>
    )
}
CounterApp.propTypes ={
    vale: PropTypes.number
}

export default CounterApp