import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/Login&signup/Login'
import Home from './components/Homepage/Home'
import Art from './components/Programs/art'
import Medicine from './components/Programs/medicine'
import Business from './components/Programs/business'
import Computer from './components/Programs/computer'
import Engineering from './components/Programs/engineering'
import Piloting from './components/Programs/piloting'
import Admin from './components/Admin/Admin'
import Application from './components/Application/Application'
import Students from './components/Admin/students/Students'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home />} />
        <Route path='/art' element={<Art />} />
        <Route path='/medicine' element={<Medicine />} />
        <Route path='/business' element={<Business />} />
        <Route path='/computer' element={<Computer />} />
        <Route path='/engineering' element={<Engineering />} />
        <Route path='/piloting' element={<Piloting />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/application' element={<Application />} />
        <Route path='/students' element={<Students />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
