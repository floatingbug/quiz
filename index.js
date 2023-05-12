const express = require('express');
const app = express();
const server = require('http').createServer(app);
const router = require('./router.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(cors())
app.use(bodyParser.json())
app.use(session({
	secret: "lksdjfaih39w93h239f32hf29f239",
	resave: false,
	saveUninitialized: false
}))
app.use('/', router)


server.listen(8000);
