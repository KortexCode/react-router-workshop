import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from './pages/Layout';
import { AuthProvider, useAuth } from './components/auth';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage'; 
import { ProfilePage } from './pages/ProfilePage';
import { ErrorPage } from './pages/ErrorPage';
import { postLoader } from './pages/BlogPage';
import { BlogPost } from './pages/BlogPost';
import { loaderBlogPost } from './pages/BlogPost';
import { LonginPage } from './pages/LoginPage';
import { LogoutPage } from './pages/LogoutPage';

const router = createHashRouter([
  { 
    element: <AuthProvider/>,
    children:[
      {  
        path: "/",
        element:<Layout/>,
        errorElement: <ErrorPage/>,
        children:[  
          {
            index:true,
            path: "/",
            element:<HomePage className="container"/>,
          },
          {
            path: "/login",
            element:<LonginPage/>,
          },
          {
            path: "/logout",
            element:<LogoutPage/>,
          },
          {
            path: "/profile",
            element:<ProfilePage/>,
          },
          {
            path: "/blog",
            element:<BlogPage/>,
            loader:postLoader,

          },
          {
            path: "/blog-post/:slug",
            element:<BlogPost/>,
            loader:loaderBlogPost,  
          },
        ]
      } 
    ]
  },
])

function App() {
  
  return (
    <React.Fragment>
      <RouterProvider router={router}/>
    </React.Fragment>

)
}

export default App

/* function App() {

  return (
    <HashRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/*' element={<p>Not Found</p>}/>
      </Routes>
    </HashRouter>
  )
} */