import React, {useState} from 'react'
import Sub from './Sub'

const Super = props => {

    const [num, setNum] = useState(0)

    function onClicar(valorGerado) {
        setNum(valorGerado)
    }

    return (
        <div>
            <h4>Valor: {num}</h4>
            <Sub onClicar={() => onClicar(Math.random())}></Sub>
        </div>)
}



export default Super