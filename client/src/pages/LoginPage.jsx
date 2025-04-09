import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Link } from '@mui/material';
import axios from 'axios';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/api/auth/${isLogin ? 'login' : 'register'}`,
        formData
      );
      
      if (isLogin) {
        localStorage.setItem('token', response.data.token);
        navigate('/');
      } else {
        setIsLogin(true);
      }
    } catch (error) {
      alert(error.response?.data?.error || '请求失败');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        {isLogin ? '登录' : '注册'}
      </Typography>
      
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <TextField
            fullWidth
            label="用户名"
            margin="normal"
            required
            onChange={(e) => setFormData({...formData, username: e.target.value})}
          />
        )}
        
        <TextField
          fullWidth
          label="邮箱"
          type="email"
          margin="normal"
          required
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />

        <TextField
          fullWidth
          label="密码"
          type="password"
          margin="normal"
          required
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />

        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{ mt: 3 }}
        >
          {isLogin ? '登录' : '注册'}
        </Button>

        <Typography sx={{ mt: 2, textAlign: 'center' }}>
          {isLogin ? '没有账号？' : '已有账号？'}
          <Link
            component="button"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? '立即注册' : '去登录'}
          </Link>
        </Typography>
      </form>
    </Box>
  );
}