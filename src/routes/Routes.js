const express = require ('express');
const router = express.Router();

const indexcontroller = require('../Controllers/indexcontroller.js');

router.get('/', indexcontroller.getindexpage);

module.exports = router;