var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./db');

app.use('/public', express.static('public'));

//创建application/x-www-form-urlencoded编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//首页页面
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/' + 'index.html');
})

//首页接口
app.post('/GetAchievement', urlencodedParser, function (req, res) {
    var xm = req.body.xm;
    var ksh = req.body.ksh;
    var birthday = req.body.birthday;

    if (!xm) {
        res.json({ code: -1, message: '姓名不能为空' });
    } else if (!ksh) {
        res.json({ code: -1, message: '准考证号不能为空' });
    } else if (!birthday) {
        res.json({ code: -1, message: '出生年月不能为空' });
    }

    db.getUserInfo({ name: ksh + birthday }, function (result) {
        if (result != null) {
            res.json({ code: -1, message: result.XM });
        }
    });

})

var server = app.listen(8082, function () {
    var port = server.address().port;
    console.log('应用实例，访问地址为 http://127.0.0.1:', port);
})