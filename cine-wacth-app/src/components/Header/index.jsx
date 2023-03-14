import { Link } from 'react-router-dom'
import './style.css'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


export default function Header(){

    function menuShow(){
        let bottom_open = document.querySelector('.open_bottom')
        let bottom_close = document.querySelector('.close_bottom')
        let menuMobile = document.querySelector('.mobile-menu')
        if(menuMobile.classList.contains('open')){
            menuMobile.classList.remove('open')
            bottom_open.style.display="block";
            bottom_close.style.display="none";
        }else{
            menuMobile.classList.add('open');
            bottom_open.style.display="none";
            bottom_close.style.display="block";
        }
    }

    return(
        <div className='container_nav'>
        <h1><Link to='/'>CineWacth</Link></h1>
        <ul>
            <li className='nav_item'><Link to="/">HOME</Link></li>
            <li className='nav_item'><Link to="/sobre">SOBRE</Link></li>
            <li className='nav_item' id='list'><Link to="/lista">MINHA LISTA</Link></li>
        </ul>
        <div className="toglle-btn">
            <button onClick={menuShow} className="icon_bottom">
            <AiOutlineMenu  className='open_bottom'/>
            <AiOutlineClose className='close_bottom'/>
            </button>
        </div>
        <div className='mobile-menu'>
        <ul>
            <li className='nav_item'><Link to="/">HOME</Link></li>
            <li className='nav_item'><Link to="/sobre">SOBRE</Link></li>
            <li className='nav_item' id='list'><Link to="/lista">MINHA LISTA</Link></li>
        </ul>
        </div>
    </div>
    )
}