import { Outlet } from 'react-router-dom'
import { Navbar } from '@/widgets/navbar'

const MainLayout = () => {
  
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  )
}

export default MainLayout