import styled from "styled-components"

export default function Assento({ cad, selecionados, setSeleciona }) {
    let corBorda;
    let cor;
    let estaLivre = cad.isAvailable;
    let estaSelecionado;

    if(selecionados.includes(cad.name)){
        estaSelecionado= true;
    }
    else{
        estaSelecionado=false;
    }

    function selecionaAssento() {
        if (estaSelecionado === false && estaLivre === true) {
            let novoArray = [...selecionados, cad.name]
            setSeleciona(novoArray);
            estaSelecionado = true;
        }
        else if(estaSelecionado === false && estaLivre === false){
            alert("Esse assento está selecionado")
        }
        else {
            const resultado = selecionados.filter((valor) => valor !== cad.name)
            setSeleciona(resultado)
            estaSelecionado = false;
        }

    }

    if (estaSelecionado) {
        cor = "#1AAE9E"
        corBorda = "#0E7D71"
    }
    else {
        if (estaLivre) {
            cor = "#C3CFD9"
            corBorda = "#808F9D"
        }
        else {
            cor = "#FBE192"
            corBorda = "#F7C52B"
        }
    }

    return (
        <AssentoIndividual cor={cor} corBorda={corBorda}>
            <button onClick={selecionaAssento}>{cad.name}</button>
        </AssentoIndividual>

    )
}

const AssentoIndividual = styled.div`
    button{
        border-radius: 50px;
        width: 26px;
        height: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
        margin-bottom: 8px;
        background-color: ${props => props.cor};
        border: 1px solid ${props => props.corBorda};
        cursor: pointer;
    }
`