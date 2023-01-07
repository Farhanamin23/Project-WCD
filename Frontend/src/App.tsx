import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './component/footer'
import Navbar from './component/navbar'
import {Login , Register, Home} from './Pages/index'

const App:React.FC = () => {
  return (
    <div className='min-h-[100vh]'>
      <Router>

      <Navbar />
        <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        </Routes>

      <Footer />
      </Router>
    </div>
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