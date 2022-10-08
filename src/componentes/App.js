import ResetStyle from "../globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaFilmes from "./ListaFilmes";
import ListaHorarios from "./ListaHorarios";
import ListaAssentos from "./ListaAssentos";

export default function App() {
    return (
        <BrowserRouter>
            <ResetStyle />
            <Routes>
                <Route path="/" element={<ListaFilmes />}></Route>
                <Route path="/sessoes/:idFilme" element={<ListaHorarios />}></Route>
                <Route path="/assentos/:idSessao" element={<ListaAssentos />}></Route>
            </Routes>
        </BrowserRouter>
    )
}