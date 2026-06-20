import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layouts/RootLayout.jsx';
import Home from './components/Home/Home.jsx';
import AllProducts from './components/AllProducts/AllProducts.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import Register from './components/Register/Register.jsx';
import Myproducts from './components/MyProducts/Myproducts.jsx';
import Mybids from './components/Mybids/Mybids.jsx';
import Login from './components/Login/Login.jsx';
import PrivateRoute from './contexts/PrivateRoute.jsx';
import ProductsDetails from './components/ProductsDetails/ProductsDetails.jsx';
import CreateProduct from './components/CreateProduct/CreateProduct.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home

      },
      {
        path: '/allProducts',
        Component: AllProducts,

      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: '/myProducts',
        element: <PrivateRoute>
          <Myproducts></Myproducts>
        </PrivateRoute>
      },
      {
        path: '/myBids',
        element: <PrivateRoute>
          <Mybids></Mybids>
        </PrivateRoute>
      },
      
      {
        path: 'productDetails/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`),
        Component: ProductsDetails
      },
      {
        path: '/createProduct',
        Component: CreateProduct
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>,
)
