const app = require('express');
const router = app.Router();
require('dotenv').config();
const userController = require('../controllers/userController');
const authenticateToken = require('../middlewares/authMiddleware');

router.post('/register',userController.registerUser);

router.post('/activation',userController.checkUserActivation);

router.post('/registerPassword',userController.updateRegisterPassword);

router.post('/login',userController.loginUser);

router.post('/userAuth', authenticateToken, (req, res)=>{
  res.status(200).send({status:true})
}); 

module.exports = router;