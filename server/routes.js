const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

//test 
router.get("/test",controller.test);
router.get("/identify",controller.identification);
module.exports = router;