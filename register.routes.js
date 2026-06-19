const express = require('express');
const router = express.Router();
const registerController = require('./register.controller')




router.post('/register', registerController.register);

router.get('/', (req, res) => {
  res.send('Register route works');
});
router.post('/', registerController.register);
console.log("Register routes loaded");
module.exports = router