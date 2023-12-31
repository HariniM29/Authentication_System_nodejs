
const express=require('express');
const app=express();
const path=require('path');
const bodyparser=require('body-parser');
const session=require('express-session');
const {v4:uuidv4}=require('uuid');
const router=require('./router');
const port=process.env.PORT||3003;
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(session({
    secret: uuidv4(),
    resave:false,
    saveUninitialized: true
}));

app.set('view engine','ejs');

app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/assets',express.static(path.join(__dirname,'public/assets')));
app.use('/route',router);
app.get('/',(req,res)=>{
    res.render('base',{title:"LOgin systems"});
})
app.listen(port,()=>{console.log("listening to port http://localhost:3003")})