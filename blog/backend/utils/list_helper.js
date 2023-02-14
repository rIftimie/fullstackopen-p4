var _ = require('lodash');

function dummy(blogs) {
	return 1;
}

// step 4.4
function totalLikes(blogs) {
	return blogs
		.map((blog) => blog.likes)
		.reduce((current, acc) => current + acc);
}

//step 4.5
function favoriteBlog(blogs) {
	return blogs.reduce((current, acc) =>
		current.likes > acc.likes ? current : acc
	);
}

// step 4.6
function mostBlogs(blogs) {
	return _.map(_.groupBy(blogs, 'author'), (blogs, author) => ({
		author: author,
		blogs: blogs.length,
	})).reduce((current, acc) => (current.blogs > acc.blogs ? current : acc));
}

// step 4.7
function mostLikes(blogs) {
	return _.map(_.groupBy(blogs, 'author'), (blogs, author) => {
		const mostLikes = blogs
			.map((blog) => blog.likes)
			.reduce((current, acc) => current + acc);
		return { author: author, likes: mostLikes };
	}).reduce((current, acc) => (current.likes > acc.likes ? current : acc));
}

module.exports = {
	dummy,
	totalLikes,
	favoriteBlog,
	mostBlogs,
	mostLikes,
};
