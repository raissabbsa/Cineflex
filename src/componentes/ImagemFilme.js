import styled from "styled-components"

export default function ImagemFilme({img}){
    return(
        <Imagem>
            <img src={img.posterURL} />
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