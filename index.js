var http = require('http');
var express = require("express");
var RED = require("node-red");


// Create an Express app
var app = express();

// Add a simple route for static content served from 'public'
app.use("/",express.static("public"));


app.get('/hi', (req, res) => {
    
    res.send('hello world');
    res.send("HIII")
    res.send("HIII")
    res.send('hello world');
})


// Create a server
var server = http.createServer(app);

// Create the settings object - see default settings.js file for other options
var settings = {
    httpAdminRoot:"/red",
    httpNodeRoot: "/api",
    userDir:"./",
    flowFile:"flows.json",
    credentialSecret: "nskjdvfhbkjshdfvhbsdfvlauetowiryeughdf",
    functionGlobalContext: {}    // enables global context
};

app.get('/api/storeData')


// Initialise the runtime with a server and settings
RED.init(server,settings);

// Serve the editor UI from /red
app.use(settings.httpAdminRoot, RED.httpAdmin);

// // Serve the http nodes UI from /api
app.use(settings.httpNodeRoot,RED.httpNode);

server.listen(8000);

// Start the runtime
RED.start();