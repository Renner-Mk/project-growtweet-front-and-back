import { BrowserRouter, Routes, Route } from 'react-router'
import { Login } from '../pages/Login'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { ProtectedRoute } from '../components/ProtectedRoute'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DefaultLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="explore" element={<p>explorar</p>} />
          <Route path="profile" element={<p>profile</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
