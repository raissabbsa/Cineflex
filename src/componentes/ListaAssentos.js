import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"
import styled from "styled-components";
import Assento from "./Assento";
import InfoInputs from "./InfoInputs";
import Topo from "../Topo";
import Rodape from "./Rodape"

export default function ListaAssentos({setCompra, setUsuario}){
    const {idSessao} = useParams();
    const [assentos, setAssentos] = useState([])
    const [selecionados, setSeleciona]= useState([]);
    const [infosMovie, setInfosMovie] = useState([])
    const [infosDia, setInfosDia] = useState([])


    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
        const promessa = axios.get(URL)

        promessa.then((res) => {
            setAssentos(res.data.seats)
            setInfosMovie(res.data.movie)
            setInfosDia(res.data.day)
            setCompra(res.data)
        })
        promessa.catch((erro) => {
            console.log(erro.response.data)
        })
    }, [])
    
    return(
        <>
            <Topo texto={"(s) assento(s)"}/>
            <ContainerAssentos>
            {assentos.map((cad) => <Assento 
            key={cad.id} 
            cad={cad}
            selecionados={selecionados}
            setSeleciona={setSeleciona} 
            />)}
            </ContainerAssentos>
            <Botoes>
                <button></button>
                <button></button>
                <button></button>
            </Botoes>
            <Botoes>
                <p>Selecionado</p>
                <p>Disponível</p>
                <p>Indisponível</p>
            </Botoes>
            <InfoInputs selecionados={selecionados} setUsuario={setUsuario}/>
            <Rodape>
                <div>
                    <img alt="Filme" src={infosMovie.posterURL} />
                </div>
                <div>
                    <p>{infosMovie.title}</p>
                    <p>{infosDia.weekday} - {infosDia.date}</p>
                </div>
            </Rodape>
        </>
    )
}

const ContainerAssentos = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 24px;
    
`
const Botoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 40px;
    button{
        width: 24px;
        height: 24px;
        border-radius: 20px;
    }
    button:first-child {
        background-color: #0E7D71;
        border: 1px solid #1AAE9E;
    }
    button:nth-child(2) {
        background-color: #C3CFD9;
        border: 1px solid #7B8B99;
    }
    button:nth-child(3) {
        background-color: #FBE192;
        border: 1px solid #F7C52B;
    }
`
