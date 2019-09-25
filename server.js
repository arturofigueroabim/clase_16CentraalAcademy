const express = require('express');
const app = express();
const port = 9000;
const router = express.Router();

/* const handler = function(req,res){
        res.status(200)
        res.set('Content-Type', 'text/plain')
        res.send('<h1>Hola<h1>')
}

app.get('/handler1', handler); 

app.use(function(req,res,next){
    console.log("Soy un middleware");
    res.send('Soy un middelware')
    next();
})
*/

//app.get('/handler2', handler);

router.get('/', (req,res) =>{
    res.sendFile(__dirname + '/public/file.txt')
})

app.use('/asset', express.static('public'))

//app.use('/asset', router)

app.listen(port, function(){
    console.log(`Example app listening on port ${port}!`);
})

        /*  res.send("Hello World Express Handler! " + req.baseUrl + req.hostname + req.body + 
      req.hostname + req.method + req.originalUrl +req.path + req.protocol +  req.query);
        console.dir(req.baseUrl);
        console.dir(req.body);
        console.dir(req.hostname);
        console.dir(req.method);
        console.dir(req.originalUrl);
        console.dir(req.path);
        console.dir(req.protocol);
        console.dir(req.query);*/