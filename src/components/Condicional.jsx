const Condicional = (props) => {

    return (<div>
        <span>O número é {props.numero}</span>
        {props.numero % 2 === 0 ? <span>Par</span> :
            <span>Impar</span>}



    </div>)

}


export default Condicional