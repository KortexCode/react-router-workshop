import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from './pages/Layout';
import { Menu } from "./components/Menu";
import { AuthRoute } from './components/AuthRoute';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage'; 
import { ProfilePage } from './pages/ProfilePage';
import { ErrorPage } from './pages/ErrorPage';
import { BlogLinks } from './components/BlogLinks';
import { postLoader } from './pages/BlogPage';
import { BlogPost } from './pages/BlogPost';
import { loaderBlogPost } from './pages/BlogPost';
import { LonginPage } from './pages/LoginPage';
import { LogoutPage } from './pages/LogoutPage';
import { useAuth } from './hooks/useAuth';


function App() {

  const {
    username,
    activedDeletePost, 
    idToDelete,
    rolesList,
    login,
    logout,
    activedDelete,
  } = useAuth();

  const router = createHashRouter([
    {  
      path: "/",
      element:(
      <Layout>
        <Menu username={username} />
      </Layout>),
      errorElement: <ErrorPage/>,
      children:[  
        {
          index:true,
          path: "/",
          element:<HomePage className="container"/>,
        },
        {
          path: "/login",
          element:<LonginPage username={username} login={login}/>,
        },
        {
          path: "/logout",
          element:(
          <AuthRoute username={username}>
            <LogoutPage logout={logout}/>
          </AuthRoute>),
        },
        {
          path: "/profile",
          element:(
            <AuthRoute username={username}>
              <ProfilePage username={username}/>
            </AuthRoute>), 
        },
        {
          path: "/blog-post/:slug",
          element:<BlogPost username={username} activedDelete={activedDelete}
          rolesList={rolesList}/>,
          loader:loaderBlogPost,  
        },
        {
          path: "/blog",
          element:
          <BlogPage idToDelete={idToDelete} activedDeletePost={activedDeletePost}/>,
          loader:postLoader,
        },
      ]
    } 
  ])
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