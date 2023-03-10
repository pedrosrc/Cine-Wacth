import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from '../../pages/Home'
import Lista from '../../pages/Lista'
import Sobre from '../../pages/Sobre'
import Header from '../Header'
import Filme from '../../pages/Filme'
import Erro from '../../pages/Erro'

export function Nav(){
    return(
        <div>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/lista" element={<Lista/>}/>
                    <Route path="/sobre" element={<Sobre/>} />
                    <Route path='/filme/:id' element={<Filme/>} />
                    <Route path="*" element={<Erro/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )

}