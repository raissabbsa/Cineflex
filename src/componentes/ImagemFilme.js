import { Link } from "react-router-dom"
import styled from "styled-components"

export default function ImagemFilme({img}){
    return(
        <Imagem>
            <Link to={`/sessoes/${img.id}`}>
                <img data-identifier="movie-outdoor" src={img.posterURL} alt="Filme"/>
            </Link>
        </Imagem>
    )
}

const Imagem = styled.div`
    img{
        width: 129px;
        height: 193px;
        margin-bottom: 20px;
        margin-left: 20px;
    }

`