import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import './sobre.css'

export default function Sobre(){
    return(
        <div className="container_sobre">
            <div className="sobre">
            <h1>Sobre</h1>
            <p>CineWacth se trata de um projeto pessoal, onde o intuinto é mostrar meus conhecimentos, e nada comercial. A ideia desse projeto é do <a href="https://www.udemy.com/course/curso-nodejs/#instructor-1" target="_blank">Matheus Fraga</a>, feito na Udemy, onde está sendo consumido uma API da <a href="https://developers.themoviedb.org/3" target="_blank">TheMovieDB.</a> Modifiquei e aprimorei partes desse projeto, espero que gostem e me acompanhem nas redes socias:</p>
            <ul>
                <li>
                    <a href="https://github.com/pedrosrc" target="_blamnk"><TbBrandGithub/></a></li>
                <li>
                    <a href="https://www.linkedin.com/in/pedroleodev" target="_blank"> <TbBrandLinkedin/> </a>
                </li>
            </ul>
            </div>
            
            
        </div>
    )
}