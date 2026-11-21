import { RouterProvider, createBrowserRouter, Outlet, Routes, Route } from 'react-router-dom'
import StartScreen from './features/startScreen/StartScreen'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <StartScreen></StartScreen>                        
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
