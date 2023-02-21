import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from "./routes";
import { useState } from 'react'
import { Title,Title2,Description } from './components.style'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   <RouterProvider router={router} />
    </div>
  )
}

export default App
