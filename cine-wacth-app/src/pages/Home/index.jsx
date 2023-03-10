import { useEffect, useState } from "react"
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css'

export default function Home(){

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(()=> {

        async function loadApi(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "e497db75384a8e566e73381e11b886e4",
                    language: "pt-BR",
                    page: "1"
                }
            })

            setMovie(response.data.results.slice(0,10))
            setLoading(false);
        }

        loadApi();

    }, []);

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando Filmes...</h2>
            </div>
        )
    }
  



    return(
        <div className="container">
            <h2>
                Filmes em Cartaz
            </h2>
           <div className="section_movie"> 
            {movie.map((filme)=>{
                return(
                    <div key={filme.id}>
                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt="poster" />
                        <br/>
                        <strong>{filme.title}</strong>
                        <br/>
                        <br/>
                       
                        <Link to={`/filme/${filme.id}`}>Acessar</Link>
                    </div>
                )
            })}
           </div>

           
        </div>
    )
}