import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from './pages/HomePage';
import './index.css'
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>,
)
