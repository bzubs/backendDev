const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
JWT_SECRET_KEY = "adi23347749"
app.use(express.json());
users = [];


app.post('/signup', (req, res)=>{
    const user = {
        username: req.body.username,
        password: req.body.password
    }

    users.push(user);
    res.status(201).send({message: 'User created successfully'});
})

app.post('/login', (req, res)=>{
    const token = jwt.sign({username: req.body.username}, JWT_SECRET_KEY);
    const user = users.find(u => u.username === req.body.username && u.password === req.body.password);

    if(user){
        user.token = token;
        res.status(200).send({message: 'Login successful', token: token});
    }
    else{
        res.status(401).send({message:"Invalid username or password"});
    }
})

app.get('/username', (req, res)=>{

    const token = req.headers.token;

    const decodedUser= jwt.verify(token, JWT_SECRET_KEY);
    const user = users.find(u => u.username === decodedUser.username);
    if(user){
        res.status(200).send({username: user.username, password: user.password});
    }

    else{

        res.status(401).send({message:"Unauthorized access"});
    }
})

console.log(users);


app.listen(3000, () => {
    console.log("Server running on port 3000");
});

