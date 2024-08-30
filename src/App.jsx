import './App.css'
import DetailPortfolio from './pages/DetailPortfolio.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PagesNotFound from './pages/PagesNotFound.jsx'
import Experiences from './pages/Experiences.jsx'

function App() {
  return (
   <BrowserRouter>
    <Routes>        
      <Route path='/' element={ <Home/> }/>
      <Route path='/portfolio/:id' element={ <DetailPortfolio/> }/>
      <Route path='/page-not-found' element={ <PagesNotFound/>}/>
      <Route path='/experiences' element={ <Experiences/>}/>
      <Route path='*' element={ <PagesNotFound/>}/>

    </Routes>
   </BrowserRouter>
  )
}

export default App