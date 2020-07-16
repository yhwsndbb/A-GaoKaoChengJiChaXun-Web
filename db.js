const redis = require('redis')

// 创建客户端

const redisClient = redis.createClient(6379, '192.168.4.59')

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