import axios from "axios";
import { useEffect, useState } from "react"
import styled from "styled-components"
import ImagemFilme from "./ImagemFilme";

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
            <Topo>
                <h1>CINEFLEX</h1>
                <p>Selecione o filme</p>
            </Topo>
            <ContainerFilmes>
                {imagens.map((img) => <ImagemFilme key={img.id} img={img} />)}
            </ContainerFilmes>
        </SecaoFimes>
        
    )
}

const SecaoFimes = styled.div`
    background-color: #FFFFFF;
    
`

const Topo = styled.div`
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

const ContainerFilmes = styled.div`
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    
`