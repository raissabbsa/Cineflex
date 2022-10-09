import ResetStyle from "../globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaFilmes from "./ListaFilmes";
import ListaHorarios from "./ListaHorarios";
import ListaAssentos from "./ListaAssentos";
import TelaFinal from "./TelaFinal";
import { useState } from "react";

export default function App() {
    const [infoCompra, setCompra] = useState([])
    const [infoUsuario, setUsuario] = useState({})
    return (
        <BrowserRouter>
            <ResetStyle />
            <Routes>
                <Route path="/" element={<ListaFilmes />}></Route>
                <Route path="/sessoes/:idFilme" element={<ListaHorarios />}></Route>
                <Route path="/assentos/:idSessao" element={<ListaAssentos setCompra={setCompra} setUsuario={setUsuario}/>}></Route>
                <Route path="/sucesso" element={<TelaFinal infoCompra={infoCompra}  infoUsuario={infoUsuario}/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}