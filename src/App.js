import React from 'react';
import Login from './pages/login/login';
import Register from './pages/register/register';
import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Leftbar from './components/leftbar/leftbar';
import Rightbar from './components/rightbar/rightbar';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import "./style.scss"
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';
import { useEffect } from 'react';
import { useState } from 'react';



function App() {

  const { currentUser } = useContext(AuthContext);

  const { darkMode, toggle } = useContext(DarkModeContext);

  console.log(darkMode);


  const [isLaptopSize, setIsLaptopSize] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptopSize(window.innerWidth < 1000);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />

        <div style={{ display: "flex" }}>

          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Rightbar />

        </div>


      </div>
    )
  }

  const ProtactedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }

    return children
  }

  const router = createBrowserRouter([

    {
      path: "/",
      element: <ProtactedRoute><Layout /></ProtactedRoute>,
      children: [
        {
          path: "/",
          element: <Home />
        },

        {
          path: "/profile/:id",
          element: <Profile />
        },
      ]
    },

    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/register",
      element: <Register />,
    }
  ]);

  return (
    <div>
      {isLaptopSize ? <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>Open On Laptop and Computers</div> : <RouterProvider router={router} />}

    </div>
  );
}

export default App;
