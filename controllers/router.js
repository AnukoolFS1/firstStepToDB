const router = require('express').Router();
const emp = require('../models/emp')

router.post('/', (req, res) => {
    console.log(req.body)

    const { name, email, city, phone } = req.body;

    const employee = new emp({
        name, email, city, phone
    })

    employee.save()
        .then(r => res.send({ msg: 'hello' }))
})


router.get('/', async (req, res) => {
    const result = await emp.find();
    res.status(200).json(result)
})

router.get('/:name', async (req, res) => {
    const user = await emp.find({ name: req.params.name });

    res.status(200).json(user)
})

router.put('/update/:name', async (req, res) => {
    const data = { ...req.body };
    const result = await emp.findOneAndUpdate({ name: req.params.name }, data, { upsert: false });

    if (result === null) {
        res.status(404).json({ msg: "no such data found" })
    } else {
        res.status(200).json({ msg: 'Data has updated please refresh', result })
    }
})

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id
    try {
        const { name } = await emp.findOne({ _id: id })
        const result = await emp.deleteOne({ _id: id });
        console.log(result)
        return res.status(200).json({ msg: `${name} has deleted from database` })
    } catch (err) {
        res.status(400).json({ msg: "data not found!, make sure you have insert rightful _id" })
    }
})


module.exports = router