import Blog from "../models/blogSchema.js";

export const createBlog = async (req, res) => {
    const newBlog = new Blog(req.body);
    try {
        const savedBlog = await newBlog.save();
        res.status(200).json(savedBlog);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getBlog = async (req, res) => {
    const { id } = req.params;
    try {
        console.log(id);

        const blog = await Blog.findById(id);

        res.status(200).json({blog});
    } catch (err) {
        res.status(500).json(err);
    }
}


export const deleteBlog = async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json("Blog has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
}