const router = require('express').Router();
const {login} = require('./login');

router.get('/', (req, res)=>{
	res.send('hallo')
})

router.post('/login', login)

module.exports = router;
