const express = require('express');
const router = express.Router();

const { Createdata } = require('./Controller');
const { Fetchdata } = require('./FetchAll');


router.post('/createdata', Createdata);
router.get('/fetchdata', Fetchdata);

module.exports = router;