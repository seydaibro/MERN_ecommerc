import {createBrowserRouter, RouterProvider, Outlet}  from "react-router-dom"
import './App.css';
import './index.css';
import { Footer } from "./components/footer/Footer";

import { Navbar } from './components/Navbar/Navbar';
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { SingleProduct } from "./pages/singlep/SingleProduct";

const Layout = () =>{
 return (<>
  <Navbar/>
  <Outlet/>
  <Footer/>
  </>)
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/product/:slug',
        element:<SingleProduct/>
      }
    ]
    
  },
])
function App() {
  return (
    <div  className='App'>
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );


  
}

export default App;

