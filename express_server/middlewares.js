const express = require('express');
const app = express();
const cors = require('cors');


// Global variables
let requestcounter = 0;

// Middlewares
function requestIncreaser(req, res, next){
    requestcounter++;
    console.log(`Request number: ${requestcounter}`);
    next();
}

// Apply middlewares globally before routes
app.use(requestIncreaser);
app.use(express.json());
app.use(cors());
// Routes
app.post('/add', (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({ answer: a + b });
});

app.post('/subtract', (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({ answer: a - b });
});

app.post('/multiply', (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({ answer: a * b });
});

app.post('/divide', (req, res) => {
    const a = parseInt(req.body.a); 
    const b = parseInt(req.body.b);
    if (b === 0) {
        res.status(400).json({ error: "Division by zero is not allowed" });
    }
    else {
        res.json({ answer: a / b });
    }
});


// Listen on port 3000
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

        
//cors -- cross origin resource sharing
//backend and frontend are on different ports or have different urls
//cors allows the frontend to access the backend
//example google.com hosts frontend and api.google.com hosts backend
//selective frontend are allowed to access the backend
//by default, browsers block cross-origin requests for security reasons
//cors is a security feature implemented by browsers to prevent malicious websites from 
// making requests to other domains without permission


//so this file when accessed from index2.html is currently not working
//because the browser is blocking the request due to CORS policy

//now if we want to allow the frontend to access the backend
//we can use the cors middleware  

//now hosted frontend can access the backend
//by default, cors allows all origins to access the backend