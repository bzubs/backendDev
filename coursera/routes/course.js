const {Router} = require('express')
const courseRouter = Router();



courseRouter.post('/course/purchase', (req, res)=>{

    res.json({
        message: "purchase endpoint"
    })
})


courseRouter.post('/course/preview', (req, res)=>{

    res.json({
        message: "purchase endpoint"
    })
})

module.exports={
    courseRouter: courseRouter
}