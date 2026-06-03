//creating a HTTP server using express
const express = require('express');
const app = express();

app.get('/add', function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({

        answer: parseInt(a) + parseInt(b)
    })

})


app.get('/subtract', function(req, res){
    const a = parseInt(req.query.a);    
    const b = parseInt(req.query.b);

    res.json({
        answer: parseInt(a) - parseInt(b)
    })

})

app.get('/multiply', function(req, res){
    const a = parseInt(req.query.a);    
    const b = parseInt(req.query.b);    
    res.json({      

        answer: parseInt(a) * parseInt(b)
    })
})
app.get('/divide', function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    if(b === 0){    
        res.status(400).json({ error: "Division by zero is not allowed" });
    } else {
        res.json({
            answer: parseInt(a) / parseInt(b)
        });
    }   
})


app.get('/add/:a/:b', function(req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({
        answer: parseInt(a) + parseInt(b)
    })
})


app.listen(3000);