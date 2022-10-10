import axios from "axios";
import { useEffect, useState } from "react"
import styled from "styled-components"
import ImagemFilme from "./ImagemFilme"
import Topo from "../Topo";

export default function ListaFilmes(){
    const [imagens, setImagens] = useState([]);

    useEffect(() => {
        const URL="https://mock-api.driven.com.br/api/v5/cineflex/movies";
        const promessa=axios.get(URL);

        promessa.then((res) => {
            setImagens(res.data)
        })
        promessa.catch((erro) => {
            console.log(erro.response.data)
        })
    },[])

    return(
        <SecaoFimes>
            <Topo texto={"filme"}/>
            
            <ContainerFilmes>
                {imagens.map((img) => <ImagemFilme key={img.id} img={img} />)}
            </ContainerFilmes>
        </SecaoFimes>
        
    )
}

const SecaoFimes = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ContainerFilmes = styled.div`
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 80%;
    
`