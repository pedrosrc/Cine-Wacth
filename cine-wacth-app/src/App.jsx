import './App.css'
import { Nav } from './components/Nav'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return(
    <>
      <ToastContainer theme='dark' autoClose={2000}/>
      <Nav/>

    
    </>
  )
}

export default App
