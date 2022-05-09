const express= require('express');
const router = express.Router();

router.get('/', (req,res) => {

    const data = ['hola','chau']

    res.send({data :data});
})

module.exports = router;