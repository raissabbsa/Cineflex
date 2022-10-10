import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import RenderHorarios from "./RenderHorarios"
import Topo from "../Topo"
import Rodape from "./Rodape"
import styled from "styled-components"

export default function ListaHorarios(){
    const [horario, setHorario] = useState([])
    const [infos, setInfos] = useState([])
    const {idFilme} = useParams()

    useEffect(() => {
        const URL= `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
        const promessa = axios.get(URL)

        promessa.then((res) => {
            setHorario(res.data.days)
            setInfos(res.data)            
        })

        promessa.catch((erro) => {
            console.log(erro.response.data)
        })
    },[])
    return(
        <>  
            <Topo texto={"o horário"}/>
            <ContainerHorarios>
                {horario.map((dias) => <RenderHorarios key={dias.id} dias={dias}/>)}
            </ContainerHorarios>
            <Rodape>
                <div>
                    <img alt="Filme" src={infos.posterURL} data-identifier="movie-img-preview"/>
                </div>
                <div>
                    <p data-identifier="movie-and-session-infos-preview">{infos.title}</p>
                </div>
            </Rodape>

        </>
    )
}

const ContainerHorarios = styled.div`
    margin-bottom: 170px;
`