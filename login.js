function login(req, res){
	req.session.user = req.body;
	res.end("logged in")
}

module.exports = {login};
