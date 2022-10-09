import { useNavigate } from "react-router-dom";
import styled from "styled-components"

export default function ListaAssentos({infoCompra, infoUsuario}){
    const navegador = useNavigate()

    const infoFilme=infoCompra.movie;
    const infoData=infoCompra.day;
    const arrayAssentos=infoUsuario.selecionados;
    
    const assentos = [];
    arrayAssentos.forEach((s,i) => {
        assentos.push(<p key={i} data-identifier="seat-infos-reserve-finished">Assento {s}</p>)
    });

    function redirecionar(){
        navegador("/")
    }
    return(
        <>
            <Cabecalho>
                <h1>CINEFLEX</h1>
                <p>Pedido feito com sucesso!</p>
            </Cabecalho>
            <Conteudo>
                <h1>Filme e Sessão</h1>
                <p data-identifier="movie-session-infos-reserve-finished">{infoFilme.title}</p>
                <p data-identifier="movie-session-infos-reserve-finished">{infoData.date} {infoCompra.name}</p>
                <h1>Ingressos</h1>
                {assentos}
                <h1>Comprador</h1>
                <p data-identifier="buyer-infos-reserve-finished">{infoUsuario.nome}</p>
                <p data-identifier="buyer-infos-reserve-finished">{infoUsuario.cpf}</p>
                <button onClick={redirecionar} data-identifier="back-to-home-btn">Voltar pra home</button>
            </Conteudo>
        </>
    )
}

const Cabecalho = styled.div`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;

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
        margin-top: 20px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        color: #247A6B;
        font-weight: 700;
    }
`
const Conteudo = styled.div`
    padding: 30px;
    color:#293845;
    h1{
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 15px;
        margin-top: 25px;
    }
    p{
        font-size: 22px;
        margin-bottom: 5px;
    }

    button{
        margin-top: 40px;
        height: 42px;
        width: 225px;
        background-color: #E8833A;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 18px;
        cursor: pointer;
    }
    
`