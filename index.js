var express = require('express');
var ejs = require('ejs');

var app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/about', (req, res) => {
    res.render('index.ejs', { myName: 'Sanaz Soleimani...', items: [1,2,3,4,5] });
})

app.get('/',function(req,res){
    res.send('<h1>Welcome to nodejs!</h1>');
});

app.get('/person/:name/order/:id',(req,res) =>{
    res.send('<h1>'+req.params.name+'</h1>' + '<br><h1>'+req.params.id+'</h1></br>');
})

// app.get('/about', (req, res) => {
//     res.render('index.ejs', { myName: 'Sanaz Soleimani', items: [1,2,3,4,5] });
// })

app.listen(1024,function(){
    console.log('This is sample page');
});


