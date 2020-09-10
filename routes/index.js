var express = require('express');
const e = require('express');
var router = express.Router();
var cate = require('../controllers/cateController')

/* GET home page. */
router.get('/', cate.getcate);
router.get('/getcatelist', cate.getcatelist)

module.exports = router;
