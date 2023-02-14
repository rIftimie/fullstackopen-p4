const blogsRouter = require('express').Router();
const Blog = require('../models/blog.js');

blogsRouter.get('/', (req, res) => {
	Blog.find({}).then((blogs) => {
		res.json(blogs);
	});
});

blogsRouter.post('/', (req, res) => {
	const blog = new Blog(req.body);

	blog.save().then((result) => {
		res.status(201).json(result);
	});
});

export default blogsRouter;
