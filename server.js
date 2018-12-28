const Constants = require('./constants');
const mosca = require('mosca');

var ascoltatore = {
    //using ascoltatore
    type: 'mongo',
    url: 'mongodb://localhost:27017/mqtt',
    pubsubCollection: 'ascoltatori',
    mongo: {}
};

var settings = {
    port: Constants.servers.local.port,
//    backend: ascoltatore
    interfaces: [
        { type: "mqtt", port: 1883 },
        { type: "http", port: 3000, bundle: true, static: './' } // to enable websocket (used by browsers)
    ],

};

var server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

// fired when a message is received
server.on('published', function(packet, client) {
    console.log('Published', packet.payload);
});

server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
    console.log('Mosca server is up and running');
}
