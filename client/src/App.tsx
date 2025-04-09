import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            论坛
          </Typography>
          <Button color="inherit" component={Link} to="/login">登录</Button>
          <Button color="inherit" component={Link} to="/register">注册</Button>
        </Toolbar>
      </AppBar>

      <main className="main-content">
        {/* 帖子列表占位 */}
        <div style={{ padding: 20 }}>
          <Typography variant="h5">最新帖子</Typography>
          <div style={{ marginTop: 20 }}>
            {/* 帖子列表内容 */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
