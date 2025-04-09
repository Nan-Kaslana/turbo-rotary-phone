import { useEffect, useState } from 'react';
import { AppBar, Toolbar, Container, Typography, Button, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('获取帖子列表失败:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            论坛首页
          </Typography>
          <Button color="inherit" component={Link} to="/login">登录</Button>
          <Button color="inherit" component={Link} to="/profile">个人中心</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 4 }}>
        <Button
          variant="contained"
          component={Link}
          to="/post/new"
          sx={{ mb: 3 }}
        >
          新建帖子
        </Button>

        {posts.map(post => (
          <Card key={post.id} sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h5">{post.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {post.content.substring(0, 100)}...
              </Typography>
              <Button component={Link} to={`/post/${post.id}`} sx={{ mt: 2 }}>
                查看详情
              </Button>
            </CardContent>
          </Card>
        ))}
      </Container>
    </div>
  );
}