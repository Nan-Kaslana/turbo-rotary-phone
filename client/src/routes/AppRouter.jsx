import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import PostPage from '../pages/PostPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="/profile" element={<div>个人主页开发中...</div>} />
      </Routes>
    </BrowserRouter>
  );
}