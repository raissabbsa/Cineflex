import { Link } from "react-router-dom";
import styled from "styled-components";

export default function RenderHorarios({dias}){
    const secoes = dias.showtimes;
    const botoes=[];
    secoes.map((dia) => botoes.push(
        <Link to={`/assentos/${dia.id}`} key={dia.id} ><button data-identifier="hour-minute-btn" >{dia.name}</button></Link>
    ))
    return (
        <HorarioSemana>
            <p data-identifier="session-date">{dias.weekday} - {dias.date}</p>
            <BotoesHorarios>
                {botoes}    
            </BotoesHorarios>
        </HorarioSemana>
    )
}

const HorarioSemana = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    margin-bottom: 22px;
    p{
        margin-bottom: 22px;
        color: #293845;
        font-size: 20px;
    }
`
const BotoesHorarios = styled.div`
    button{
        background-color: #E8833A;
        height: 43px;
        width: 83px;
        border: none;
        border-radius: 5px;
        margin-right: 10px;
        color: white;
        cursor: pointer;
    }
`
