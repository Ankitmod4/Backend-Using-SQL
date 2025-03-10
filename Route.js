const express = require('express');
const router = express.Router();

const { Createdata } = require('./Controller');
const { Login } = require('./FetchAll');
const {FetchUsers} = require('./GetUsers');
const {FetchMessage} = require('./FetchMessage');
const {CreateMessage} = require('./CreateMessage');
router.post('/createdata', Createdata);
router.post('/Login', Login);
router.get('/FetchUsers', FetchUsers);
router.post('/FetchMessage', FetchMessage);
router.post('/CreateMessage', CreateMessage);

module.exports = router; 