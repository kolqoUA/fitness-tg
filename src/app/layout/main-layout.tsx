import './styles.css'

import { Outlet } from 'react-router-dom'
import { Navbar } from '@/widgets/navbar'

export const MainLayout = () => {
  
  return (
    <div className='main-layout'>
      <Outlet />
      <Navbar />
    </div>
  )
}