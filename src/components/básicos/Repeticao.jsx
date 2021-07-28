import products from '../data/products'
import React from 'react'

export default function Repeticao(props) {

    function getProdutosLListItem() {
        return products.map((prod) => {
            return (

                <li key={prod.id}>
                    {prod.id} - {prod.name} - R$ {prod.price}
                </li>
            )
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosLListItem()}
            </ul>
        </div>
    )
}