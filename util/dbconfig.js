const mysql = require('mysql')
module.exports = {
    //数据库配置
    config: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '123456',
        database: 'livesql',
    },
    //连接数据库,使用mysql连接池方式
    //连接池对象
    sqlConnect: function (sql, sqlArr, callBack) {
        var pool = mysql.createPool(this.config)
        pool.getConnection((err, conn) => {
            console.log(123);
            if (err) {
                console.log('连接失败');
                return
            }
            // 事件驱动回调
            conn.query(sql, sqlArr, callBack)
            // 释放链接
            conn.release()
        })
    }


}