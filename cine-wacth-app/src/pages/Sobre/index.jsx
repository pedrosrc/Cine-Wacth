import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import './sobre.css'

export default function Sobre(){
    return(
        <div className="container_sobre">
            <div className="sobre">
            <h1>Sobre</h1>
            <p>CineWacth se trata de um projeto pessoal, criado por <a href="https://github.com/pedrosrc" target="_blamnk">Pedro Leonardo</a>, onde o intuinto é mostrar meus conhecimentos. A ideia desse projeto foi apresentada por <a href="https://www.udemy.com/course/curso-nodejs/#instructor-1" target="_blank">Matheus Fraga</a>. Nesse projeto está sendo consumido uma API da <a href="https://developers.themoviedb.org/3" target="_blank">TheMovieDB</a>, onde podemos ver os filmes em cartazes no cinema no Brasil e ver detalhes e favorita-los. Modifiquei e aprimorei partes desse projeto, espero que gostem e me acompanhem nas redes socias:</p>
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