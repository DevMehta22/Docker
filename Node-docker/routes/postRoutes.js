const router = require( 'express' ).Router();
const {getAllPosts,getPostById,addPost,updatePost,deletePost} = require("../controllers/postControllers");

router.get( '/', getAllPosts);
router.get( "/:id", getPostById );
router.post('/', addPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports=router;