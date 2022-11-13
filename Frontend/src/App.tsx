import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Login , Register, Home} from './Pages/index'

const App:React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        </Routes>
      </Router>
    </>
  )
}

// export function ProtectionRouter(props: any) {
  
//   if(localStorage.getItem('project-salt'))
//   {
//     return props.children
//   }else{
//     return <Navigate to='/' />
//   }
// }

export default App