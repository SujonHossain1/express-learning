const userRouter = require('express').Router();

const { signUp, login, getLogin } = require('../controllers/user');

userRouter.post('/sign-up', signUp);
userRouter.post('/login', login);
userRouter.get('/get-login', getLogin);

module.exports = userRouter;
