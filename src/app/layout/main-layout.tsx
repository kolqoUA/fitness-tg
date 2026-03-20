import { Outlet } from 'react-router-dom'
import { Navbar } from '../../widgets'

const MainLayout = () => {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  )
}

export default MainLayout