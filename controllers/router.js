const router = require('express').Router();
const emp = require('../models/emp')

router.post('/',(req,res)=>{
    console.log(req.body)

    const {name,email,city,phone} = req.body;

    const employee = new emp({
        name, email, city, phone
    })

    employee.save()
    .then(r=> res.send({msg:'hello'}))
})


router.get('/', async (req, res) => {
    const result = await emp.find();
    res.status(200).json(result)
})

router.get('/:name', async (req, res) => { 
    const user = await emp.find({name: req.params.name});

    res.status(200).json(user)
})


module.exports = router