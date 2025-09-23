import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/Login&signup/Login'
import Home from './components/Homepage/Home'
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
