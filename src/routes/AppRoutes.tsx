import { BrowserRouter, Routes, Route } from 'react-router'
import { Login } from '../pages/Login'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<p>about</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
