import { createBrowserRouter } from 'react-router-dom'
import { Main, Statistics, Profile, Settings } from '../pages'

import { MainLayout } from './layout'


const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/statistics',
        element: <Statistics />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/settings',
        element: <Settings />,
      }
    ]
  },
])

export default router