
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AllTasks from './pages/AllTasks'
import ImportantTasks from './pages/ImportantTasks'
import CompletedTasks from './pages/CompletedTasks'
import PendingTasks from './pages/PendingTasks'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

function App() {

  return (

    <div className='bg-[#212121] text-white h-screen p-2'>
      <Routes>
        <Route path='/' element={<Home />} >

          <Route index element={<AllTasks />} />

          <Route path='important-tasks' element={<ImportantTasks />} />

          <Route path='completed-tasks' element={<CompletedTasks />} />

          <Route path='pending-tasks' element={<PendingTasks />} />
        </Route>

        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Signin />} />
      </Routes>
    </div>

  )
}

export default App
