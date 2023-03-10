import {  useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './filme.css'
import api from "../../services/api"

export default function Filme(){

    const{id} = useParams()
    const[filme, setFilme]= useState({})
    const [loading, setLoading] = useState(true);


    useEffect (()=>{

        async function LoadFilme(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: "e497db75384a8e566e73381e11b886e4",
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data)
                setLoading(false)
            })
            .catch(()=>{
                console.log('Movie Not Found')
            })
            
        }

        LoadFilme();

        return () =>{

        }


    }, [])

    if (loading){
        return(
            <div className="info">
                <h1>Carregando Detalhes...</h1>
            </div>
        )
        
    }

    return(
        <div className="info">
            <div className="container-filme">
                <div className="poster">
                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt="poster" />
                </div>
                <div className="details">
                    <h1>{filme.title}</h1>
                    <h3>Nota: {filme.vote_average}</h3>
                    <p>Sinopse:{filme.overview}</p>
                </div>

            </div>
            

        </div>
    )
}