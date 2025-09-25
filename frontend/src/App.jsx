import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/Login&signup/Login'
import Home from './components/Homepage/Home'
import ComputerScience from './components/Programs/ComputerScience'
import BusinessAdministration from './components/Programs/BusinessAdministration'
import MedicineHealthSciences from './components/Programs/MedicineHealthSciences'
import ArtsHumanities from './components/Programs/ArtsHumanities'
import Engineering from './components/Programs/Engineering'
import Piloting from './components/Programs/Piloting'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home />} />
        <Route path='/programs/computer-science' element={<ComputerScience />} />
        <Route path='/programs/business-administration' element={<BusinessAdministration />} />
        <Route path='/programs/medicine-health-sciences' element={<MedicineHealthSciences />} />
        <Route path='/programs/arts-humanities' element={<ArtsHumanities />} />
        <Route path='/programs/engineering' element={<Engineering />} />
        <Route path='/programs/piloting' element={<Piloting />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
