import React from 'react'

const Sub = props => {


    return (
        <div>
            <button onClick={() => {
                props.onClicar()
            }}>Alterar</button>
        </div>
    )
}




export default Sub