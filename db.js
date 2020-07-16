const redis = require('redis')

// 创建客户端 端口，连接地址
const redisClient = redis.createClient(6379, '127.0.0.1')

redisClient.on('error', err => {
    console.log(err)
})
 
//查询学生成绩信息数据
function getUserInfo(param, callBack) {
    redisClient.hgetall(param.userName, (err, obj) => {
        if (err) {
            console.log(err)
            return
        }

        console.log('查询指定条件的数据...', obj);
        callBack(obj);
    })

    // 退出redis
    redisClient.quit()
}

exports.getUserInfo = getUserInfo; 