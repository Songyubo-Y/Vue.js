let express = require('express');
let app = express();
let bodyParser= require('body-parser');   
//设置允许跨域访问该服务.
app.use(function (req, res, next) {
   // TODO 支持跨域访问 
     res.header('Access-Control-Allow-Origin', '*');
     res.header('Access-Control-Allow-Headers', '*');   
     next();
}); 
 
//get(地址,访问对应的地址所触发的回调函数)
app.get('/get',(req,res)=>{
    console.log("输出授权：",req.headers);
    console.log(req.query);
    let json = JSON.stringify({
        "result":parseInt(req.query.a)+parseInt(req.query.b), 
    })
    res.send(json);
})
 
 
// 解析 json
app.use(bodyParser.json())
//解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//
app.post('/post',(req,res)=>{   
    console.log("输出授权：",req.headers);
    console.log(req.body); 
    let {name,age} = req.body
    console.log('post',name,age);  
  
    let json = JSON.stringify({
      "result":req.body.name+req.body.age, 
   })
    res.send(json); 
})

app.listen(8000,()=>{
    console.log("访问地址：http://localhost:8000..")
});

