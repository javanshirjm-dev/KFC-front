import { RouterProvider } from 'react-router'
import { router } from './router'
import { AuthProvider } from './Context/AuthContext'
import { CartProvider } from './Context/CartContext'
import { NotificationProvider } from './Context/NotificationContext'


const App = () => {
  return (
    <NotificationProvider>
      <AuthProvider>
        <CartProvider>
          <div>
            <RouterProvider router={router} />
          </div>
        </CartProvider>
      </AuthProvider>
    </NotificationProvider>
  )
}

export default App