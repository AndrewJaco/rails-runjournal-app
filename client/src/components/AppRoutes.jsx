import { Route, Routes } from 'react-router-dom'
import HomeHero from './HomeHero'
// import RunnerList from '../features/runners/RunnerList'
// import RunnerDetails from '../features/runners/RunnerDetails'
// import NewRunnerForm from '../features/runners/NewRunnerForm'
// import RunnerEditForm from '../features/runners/RunnerEditForm'
import Signup from '../features/auth/SignUp'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomeHero />} />
      {/* <Route path='/runners' element={<RunnerList />} />
      <Route path='/runners/:id' element={<RunnerDetails />} />
      <Route path='/new' element={<NewRunnerForm />} />
      <Route path='/runners/:id/edit' element={<RunnerEditForm />} /> */}
      <Route path='/signup' element={<Signup/>} /> 
    </Routes>
  )
}

export default AppRoutes
