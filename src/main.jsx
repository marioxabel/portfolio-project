import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import App from './App'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <App />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/resume',
        element: <Resume />
      },
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)


