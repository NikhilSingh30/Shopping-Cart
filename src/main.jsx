
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import CartPage from './Components/CartPage.jsx'
import Store from './Redux/Store.jsx'
import {Provider} from "react-redux"
import { Toaster } from 'react-hot-toast'


const appStore = createBrowserRouter([
  {
    path : "/",
    element : <App />
  },
  {
    path : "/cart",
    element : <CartPage />
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <RouterProvider router={appStore}></RouterProvider>
     <Toaster position="top-center" reverseOrder={false} />
    </Provider>
)
