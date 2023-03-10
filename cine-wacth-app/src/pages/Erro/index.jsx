import { Link } from "react-router-dom"
import './erro.css'
export default function Erro(){
    return(
        <div className="not-found">
            <h2>Ops! Página não encontrada.</h2>
            <h3>Acesse: <Link to="/">CineWacht</Link></h3>
        </div>
    )
}