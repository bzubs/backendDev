const {Router} = require('express')
const courseRouter = Router();



courseRouter.post('/signup', (req, res)=>{

    res.json({
        message: "signup endpoint"
    })
})



courseRouter.post('/signin', (req, res)=>{

    res.json({
        message: "signin endpoint"
    })
})

