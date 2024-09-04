import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Movie from './component/Movie/Movie.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },{
    path:"/movies/:id" ,
    element:<Movie/>,
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
