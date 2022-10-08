import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import RenderHorarios from "./RenderHorarios"

export default function ListaHorarios(){
    const [horario, setHorario] = useState([])
    const {idFilme} = useParams()

    useEffect(() => {
        const URL= `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
        const promessa = axios.get(URL)

        promessa.then((res) => {
            setHorario(res.data.days)
            
        })

        promessa.catch((erro) => {
            console.log(erro.response.data)
        })
    },[])
    return(
        <>
            <Topo>
                <h1>CINEFLEX</h1>
                <p>Selecione o horário</p>
            </Topo>
            <>
            {horario.map((dias) => <RenderHorarios key={dias.id} dias={dias}/>)}
            </>
        </>
    )
}
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