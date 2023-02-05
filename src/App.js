import React from "react";
import {
  createBrowserRouter,
  RouterProvider, 

} from "react-router-dom";
import Home from "./pages/home/Home";
import Corporate from "./pages/corporate/Corporate";
import Services from "./pages/services/Services";
import Sales from "./pages/sales/Sales";
import News from "./pages/news/News";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {

  const Layout = () => {
    return (
      <div>
        <Navbar/>
        <div style={{display:"flex"}}></div>
        <Footer/>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <Layout />
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/corporate",
          element: <Corporate/>,
        },
        {
          path: "/services",
          element: <Services/>,
        },
        {
          path: "/sales",
          element: <Sales/>,
        },
        {
          path: "/news",
          element: <News/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
      ],
    },
    
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
