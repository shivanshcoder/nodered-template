var http = require('http');
var express = require("express");
var RED = require("node-red");
const Bootstrap = require('./app/Bootstrap/bootstrap.js');

// Fetching Nodered settings from file now
var settings = require('./settings')

// Create an Express app
var app = express();


const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
 

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Add a simple route for static content served from 'public'
app.use("/",express.static("public"));

app.use(express.json({limit: "20mb"}));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('hi');
})


// Create a server
var server = http.createServer(app);



// Initialise the runtime with a server and settings
RED.init(server,settings);

// Serve the editor UI from /red
if(settings.httpAdminRoot){
    app.use(settings.httpAdminRoot, RED.httpAdmin);
}

// // Serve the http nodes UI from /api
if(settings.httpNodeRoot){
    app.use(settings.httpNodeRoot,RED.httpNode);
}

Promise.all(Bootstrap.intializeServices()).then(() => {
    server.listen(8000, () => {
        console.log('Server Started Successfully');
    });
}).catch((error) => {
    console.error(error);
});

// Start the runtime
RED.start();