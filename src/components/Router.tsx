import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { History } from '../pages/History'
import { DefaultLayout } from '../layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/rocketseat_pomodoro" element={<DefaultLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  )
}
