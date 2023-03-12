import {  useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {GrAdd , GrPlay} from 'react-icons/gr'
import './filme.css'
import api from "../../services/api"
import { toast } from "react-toastify"

export default function Filme(){

    const{id} = useParams()
    const navigation = useNavigate();

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
                navigation("/", {replace: true})
                return;
            })
            
        }

        LoadFilme();

        return () =>{

        }


    }, [navigation, id])

    function saveMovie(){
        const myList = localStorage.getItem("@cinewacth")

        let moviessave = JSON.parse(myList) || [];

        const hasMovie = moviessave.some((moviessave)=> moviessave.id === filme.id)

        if(hasMovie){
            toast.warn('O filme já está salvo!')
        }else{
            moviessave.push(filme)
            localStorage.setItem("@cinewacth", JSON.stringify(moviessave))
            toast.success('Filme salvo com sucesso!')
        }

    }


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
                    <h3>Nota: {filme.vote_average.toFixed(1)}</h3>
                    <p><strong>Sinopse:</strong>{filme.overview}</p>
                    <div className="buttons">
                    <button onClick={saveMovie} > <GrAdd/> Salvar</button>
                    <button><a href={`https://youtube.com/results?search_query=${filme.title} trailer`} target="_blank" rel="external"> <GrPlay/> Trailer</a></button>
                    </div>
                </div>
                

            </div>
            

        </div>
    )
}