import express from 'express';
import bodyParser from 'body-parser';


const myServer = express();
const portUsed = 5500;


myServer.use(bodyParser.urlencoded({ extended: true }));
myServer.use(express.static('public'));

myServer.get('/',(req,res)=>{
    res.render('index.ejs')
})

myServer.listen(portUsed,()=>{
    console.log(`The server is currently running port ${portUsed}`)
})
