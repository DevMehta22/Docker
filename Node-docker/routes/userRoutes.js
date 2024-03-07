const {Router} = require('express');
const {login,signup}= require('../controllers/userControllers')
const router = Router();

router.post('/register',signup);
router.post("/login", login);

module.exports = router


