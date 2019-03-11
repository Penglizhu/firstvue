const express=require('express');

const app=express();
const db=require('../../model/db.js')
// post
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// 转化id的类型
const ObjectId=require('mongodb').ObjectId
// 持久化
var session = require('express-session')
// 持久化
var NedbStore = require('nedb-session-store')(session);

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie:{
  	maxAge:200000000
  },
  // 配置持久化
  store: new NedbStore({
      filename: 'path_to_nedb_persistence_file.db'
    })
}))
//app.use(`/home`,express.static('./public/'));

const md5 = require("md5");

//app.get(`/`,(req,res)=>{
//  res.render('register');
//});
//app.get(`/register`,(req,res)=>{
//  res.render('register')
//});
//app.get(`/login`,(req,res)=>{
//  res.render('login');
//});
//允许跨域访问
app.all('*',function (req, res, next) {
    console.log(req,res)
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.post(`/signin`,urlencodedParser,(req,res)=>{
	var obj={
		user:req.body.user,
		pass:md5(md5(req.body.pass))
	}
	 db.find('fanke','myuser',obj,res,function(res1){
		if(res1.length===0){
           res.send({ok:false});
        }else{
        	req.session.user = req.body.user;
            req.session.login=true;
            res.send({ok:true});
        }
	})
})

app.post("/register",urlencodedParser,(req,res)=>{
	console.log(req.body.user)
	console.log(req.body.pass)
    var obj1 = {
        user:req.body.user,
        pass:md5(md5(req.body.pass)),
    };
    db.find("fanke","myuser",{user:req.body.user},res,function (res1) {
        if(res1.length===0){
            db.insert("fanke","myuser",obj1,res,function () {
            	console.log(req.body.user)
                res.send({ok:true});
            });
        }else{
            res.send({ok:false});
        }
    });

});

app.listen(8888,()=>{
    console.log("server is running!")
});
