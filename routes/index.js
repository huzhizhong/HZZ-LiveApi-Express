var express = require('express');
const e = require('express');
var router = express.Router();
var dbCongfig = require('../util/dbconfig')

/* GET home page. */
router.get('/', function (req, res, next) {
  var sql = "select * from cate";
  var sqlArr = []
  var callBack = (err, data) => {
    if (err) {
      console.log('连接出错了')
    } else {
      res.send({
        'list': data
      })
    }
  }

  dbCongfig.sqlConnect(sql, sqlArr, callBack)
  // res.render('index', { title: 'Express' });
});

module.exports = router;
