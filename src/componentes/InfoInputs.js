import styled from "styled-components"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function InfoInputs({selecionados, setUsuario}){
    const [nome, setNome] = useState("");
	const [cpf, setCpf] = useState("");
    const navegador = useNavigate()

    function fazerLogin(e){
        e.preventDefault();
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";
        const requisicao = axios.post(URL, {
			ids: selecionados,
			name: nome,
            cpf:cpf
		});

        requisicao.then((res) => {
            const novoObjeto = {selecionados: selecionados, nome: nome, cpf:cpf};
            setUsuario(novoObjeto);
            if(selecionados.length === 0){
                alert("Você precisa escolher um assento!")
            }
            else{
                navegador("/sucesso")
            }
        })
        requisicao.catch((erro) => {
            console.log(erro.response)
        })
    }

    return(
        <Input>
            <form onSubmit={fazerLogin}>
                <label>Nome do comprador:</label>
                <input type="text" data-identifier="buyer-name-input"
                value={nome} 
                onChange={e => setNome(e.target.value)} 
                placeholder="Digite seu nome ..." 
                required></input>
                <label>CPF do comprador:</label>
                <input type ="number" data-identifier="buyer-cpf-input"
                value={cpf} 
                onChange={e => setCpf(e.target.value)} 
                placeholder="Digite seu CPF ..." 
                required></input>
                <button type="submit" data-identifier="reservation-btn">Reservar Assento(s)</button>
            </form>
        </Input>
    )
}

const Input = styled.div`
    margin-bottom: 120px;
    form{
        padding: 24px;
        display: flex;
        flex-direction: column;
        
        font-size: 18px;
        color: #293845;
    }
    input{
        width: 309px;
        height: 40px;
        padding: 5px;
        font-size: 18px;
    }
    label{
        margin-bottom: 5px;
        margin-top: 10px;

    }
    button{
        margin-bottom: 20px;
        margin-top: 30px;
        height: 42px;
        width: 225px;
        background-color: #E8833A;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 18px;
        cursor: pointer;
    }
`