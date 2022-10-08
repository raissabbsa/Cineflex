import ResetStyle from "../globalStyles"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaFilmes from "./ListaFilmes"

export default function App() {
    return (
        <BrowserRouter>
            <ResetStyle />
            <Routes>
                <Route path="/" element={<ListaFilmes />}></Route>
            </Routes>
        </BrowserRouter>
    )
}