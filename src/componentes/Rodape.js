import styled from "styled-components"

export default function Assento(props) {
    return(
        <Conteudo>
            {props.children}
        </Conteudo>
    )
}

const Conteudo = styled.div`
    background-color: #DFE6ED;
    height: 117px;
    display: flex;
    align-items: center;
    padding: 10px;
    div:first-child{
        box-sizing: border-box;
        height: 89px;
        width: 64px;
        margin-right: 15px;
        padding: 8px;
        background-color: #FFFFFF;
    
    img{
        width: 48px;
        height: 72px;
    }
    }
    div:nth-child(2){
        display: flex;
        flex-direction: column;
        font-size: 26px;
    }
    
`