import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, TextField, Button, Card, CardContent } from '@mui/material';
import axios from 'axios';

export default function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // TODO: 添加获取帖子详情的API调用
    // TODO: 添加获取评论列表的API调用
  }, [postId]);

  const handleCommentSubmit = async () => {
    try {
      await axios.post(
        `http://localhost:3000/api/posts/${postId}/comments`,
        { content: newComment },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      setNewComment('');
      // TODO: 刷新评论列表
    } catch (error) {
      alert(error.response?.data?.error || '评论失败');
    }
  };

  return (
    <Container sx={{ py: 4 }}>
      {post && (
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>{post.title}</Typography>
            <Typography variant="body1" paragraph>{post.content}</Typography>
          </CardContent>
        </Card>
      )}

      <TextField
        fullWidth
        multiline
        rows={4}
        label="发表评论"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        onClick={handleCommentSubmit}
      >
        提交评论
      </Button>

      {comments.map(comment => (
        <Card key={comment.id} sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {comment.user.username} 发布于 {new Date(comment.created_at).toLocaleString()}
            </Typography>
            <Typography variant="body1">{comment.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}