// const path = require('path');
// const express = require('express');
// const app = express();

// // settings
// app.set('port', process.env.PORT || 5000);

// // Static Files
// app.use(express.static(path.join(__dirname, 'public')));

// // Start server
// const server = app.listen(app.get('port'), () => {
//     console.log('Server on port', app.get('port'));
// });


var liveServer = require("live-server");

var params = {
	port: 3000, //port: 8181, // Set the server port. Defaults to 8080.
	host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
	root: "./public", // Set root directory that's being served. Defaults to cwd.
	open: false, // When false, it won't load your browser by default.
	ignore: false, //ignore: 'scss,my/templates', // comma-separated string for paths to ignore
	file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
	wait: true, //wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
	mount: [['/components', './node_modules']], // Mount a directory to a route.
	logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
	middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};
console.log("Servidor rodando na porta 3000");

liveServer.start(params);