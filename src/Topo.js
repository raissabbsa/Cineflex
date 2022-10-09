import styled from "styled-components";

export default function Topo({texto}) {
    return (
        <Cabecalho>
            <h1>CINEFLEX</h1>
            <p>Selecione o{texto}</p>
        </Cabecalho>
    )
}

const Cabecalho = styled.div`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    h1{
        background-color: #C3CFD9;
        height: 67px;
        color:#E8833A;
        font-size: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    p{
        height: 110px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        color: #293845;
    }
`