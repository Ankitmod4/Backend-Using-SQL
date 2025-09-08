const express = require('express');
const router = express.Router();

const { Createdata } = require('./Controller');
const { Login } = require('./FetchAll');
const {FetchUsers} = require('./GetUsers');

router.post('/createdata', Createdata);
router.post('/Login', Login);
router.get('/FetchUsers', FetchUsers);

module.exports = router; 