import { MotionConfig } from 'framer-motion'
import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router'
import { ProfilePage } from '../pages/ProfilePage'

function LegacyMeetRedirect() {
  const { slug } = useParams()
  return <Navigate to={`/${slug ?? 'jineesh-mathew'}`} replace />
}

export function AppRoutes() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/jineesh-mathew" replace />} />
          <Route path="/connect" element={<ProfilePage slug="jineesh-mathew" />} />
          <Route path="/meet/arun-mukunda-menon" element={<Navigate to="/arun-menon" replace />} />
          <Route path="/meet/:slug" element={<LegacyMeetRedirect />} />
          <Route path="/arun-mukunda-menon" element={<Navigate to="/arun-menon" replace />} />
          <Route path="/:slug" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  )
}
