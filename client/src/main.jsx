import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Profile from './components/Pages/Profile.jsx'
import Post from './components/Post/Post.jsx'
import Login from './components/Pages/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'pages',
        element: <Profile />,
      },
      {
        path: 'post',
        element: <Post />,
      },
      {
        path: 'login',
        element: <Login />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

