import { RouterProvider } from 'react-router'
import { router } from './router'
import { AuthProvider } from './Context/AuthContext'
import { CartProvider } from './Context/CartContext'


const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <div>
          <RouterProvider router={router} />
        </div>
      </CartProvider>
    </AuthProvider>
  )
}

export default App