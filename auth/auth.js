const express = require('express');
const app = express();
 
app.use(express.json());
users = [];

function createToken(length = 32) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
}

app.post('/signup', (req, res)=>{
    const user = {
        username: req.body.username,
        password: req.body.password
    }

    users.push(user);
    res.status(201).send({message: 'User created successfully'});
})

app.post('/login', (req, res)=>{
    const token = createToken();
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

    const token = req.headers['token'];
    const user = users.find(u => u.token === token);
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

