import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import './lista.css'
import { toast } from "react-toastify"

export default function Lista(){

    const [filmes, setFilmes] = useState([])

    useEffect(()=>{

        const myList = localStorage.getItem("@cinewacth")
        setFilmes(JSON.parse(myList) || [])

    },[])

    function handleRemove(id){
        let filterMovie = filmes.filter((item)=>{
            return(item.id !== id)
        })

        setFilmes(filterMovie);
        localStorage.setItem("@cinewacth", JSON.stringify(filterMovie));
        toast.success('Filme removido com sucesso!')
    }

    return(
        <div className="favorites-container">
            <h1>Lista de Favoritos</h1>

            {filmes.length ===0 && <span>Você não possui nenhum filme cadastrado !</span>}
            <div className="section-favorites">
                {filmes.map((item)=>{
                    return(
                        <div key={item.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="poster" />
            
                            <span>{item.title}</span>
                            <div className="favorites-buttons">
                                
                                <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>
                                <button onClick={() => handleRemove(item.id)}>Excluir</button>
                            </div>
                                                         
                        </div>
                    )
                })}
            </div>
        </div>
    )
}