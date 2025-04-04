import  express  from 'express';
import { createBlog, deleteBlog, getBlogs } from '../controllers/blogController.js';

const blogRouter = express.Router();    

blogRouter.post('/createBlog', createBlog);
blogRouter.get('/getBlogs', getBlogs);
blogRouter.get('/getBlog/:id', getBlogs);
blogRouter.delete('/deleteBlog/:id', deleteBlog);

export default blogRouter;