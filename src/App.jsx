import { useState } from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';


import {Login}  from './components/login'
import { Signup } from './components/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (

  
    <BrowserRouter>
     <Routes>

      <Route path='/Login' element={ <Login/>}></Route>
      <Route path='/Signup' element={ <Signup/>}></Route>


     </Routes>
    </BrowserRouter>
    

  )
}

export default App
