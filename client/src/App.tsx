import {createBrowserRouter, RouterProvider, Outlet}  from "react-router-dom"
import './App.css';
import './index.css';
import { ProductsContainer } from './containers/ProductsContainer';

import { Navbar } from './components/Navbar/Navbar';
import { Home } from "./pages/Home";

const Layout = () =>{
 return (<>
  <Navbar/>
  <ProductsContainer/>
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
      // {
      //   path:"/post/:id",
      //   element:<Single/>
      // },
      // {
      //   path:"/write",
      //   element:<Write/>
      // }
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

