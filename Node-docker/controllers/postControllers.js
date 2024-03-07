const postSchema = require("../models/blogmodel");

const getAllPosts = async (req, res) => {
  try {
    res.status(200).json(await postSchema.find());
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Error fetching blogs" });
  }
};

const getPostById = async (req, res) => {
  try {
    const blog = await postSchema.findById(req.params.id);
    if (!blog) 
        return res.status(404).json({ msg: "No Blog found" });
    res.status(200).json(blog);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Error fetching the blog" });
  }
};

const addPost = async (req, res) => {
  try {
    const post = await postSchema.create(req.body);
    return res.status(201).json({ message: "Blog Post Created Successfully!",data:post});
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: "Error Creating Blog Post" });
  }
};

const updatePost = async (req, res) => {
  try {
    const blog = await postSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json(blog);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Error updating blog" });
  }
};

const deletePost = async (req, res) => {
  try {
    await postSchema.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted Succesfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Error deleting the blog" });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost,
};
