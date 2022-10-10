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
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 117px;
    display: flex;
    align-items: center;
    padding: 10px;
    div:first-child{
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