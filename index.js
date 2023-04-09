const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);

httpServer.listen(8000);
