import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import SignUpPage from './pages/SignUp.jsx'
import AllPostPage from './pages/AllPost.jsx'
import AddPostPage from './pages/AddPostPage.jsx'
import EditPostPage from './pages/EditPostPage.jsx'
import { AuthLayout, Post } from './component/index.js'
import Home from './pages/Home.jsx'
const router=createBrowserRouter(
  [
    {
      path:"/",
      element:
      
      <Home/>

    },
    {
      path:"/login",
      element:(
        <AuthLayout authentication={false}>
          <LoginPage/>
        </AuthLayout>
      )
    },
    {
         path: "/signup",
                  element: (
                      <AuthLayout authentication={false}>
                          <SignUpPage />
                      </AuthLayout>
                  ),
              },
              {
                  path: "/all-posts",
                  element: (
                      <AuthLayout authentication>
                          <AllPostPage />
                      </AuthLayout>
                  ),
              },
              {
                  path: "/add-post",
                  element: (
                      <AuthLayout authentication>
                          <AddPostPage />
                      </AuthLayout>
                  ),
              },
              {
                  path: "/edit-post/:slug",
                  element: (
                      <AuthLayout authentication>
                          {" "}
                          <EditPostPage />
                      </AuthLayout>
                  ),
              },
              {
                  path: "/post/:slug",
                  element: <Post />,
              },
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
   <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)

