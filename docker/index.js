const http = require('http');
const os = require('os');
const host = '0.0.0.0';
const port = 8000;

const requestListener = function(req, res) {
	msg = os.hostname();
	res.writeHead(200);
	res.end(msg);
};

const server = http.createServer(requestListener);
server.listen(port,host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});
