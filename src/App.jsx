import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoggedInPage'
import { Routes, Route } from 'react-router-dom'
import RegisterUser from './pages/RegisterUser'

function App() {


  return (
    <>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/login/:id' element={<LoginPage/>}/>
  <Route path='/register' element={<RegisterUser/>}/>
</Routes>
    </>
  )
}

export default App
