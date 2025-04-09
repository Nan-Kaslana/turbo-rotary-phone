import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件配置
app.use(cors());
app.use(express.json());

// 测试路由
app.get('/', (req, res) => {
  res.send('Forum API Server');
});


// 帖子列表路由
app.get('/api/posts', (req, res) => {
  // 临时测试数据
  res.json([
    { id: 1, title: '测试帖子', content: '这是一个测试帖子' }
  ]);
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});