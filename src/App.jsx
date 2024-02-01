import React from 'react'
//import './App.css';
import Main from './Main'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: '/',
    children: [
    
      {
        index: true,
        element: <Main />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
