import { Link } from 'react-router-dom'
import './style.css'


export default function Header(){
    return(
        <div className='container_nav'>
            <h1><Link to='/'>CineWacth</Link></h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/lista">Minha Lista</Link></li>
            </ul>
        </div>
    )
}