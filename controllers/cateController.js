// 获取分类

const dbCongfig = require("../util/dbconfig")

getcate = (req, res) => {
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
}

// 获取列表
getcatelist = (req, res) => {
    let { id } = req.query;
    var sql = "select * from catelist where cate_id=?";
    var sqlArr = [id]
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
}

module.exports = {
    getcate,
    getcatelist
}