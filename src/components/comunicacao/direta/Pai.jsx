import React from 'react'
import Filho from './Filho'

const Pai = props =>
    <div>
        <Filho {...props}>Yukino</Filho>
        <Filho sobrenome='Re:zero'>Rem</Filho>
        <Filho sobrenome='Re:zero'>Ram</Filho>
    </div>



export default Pai