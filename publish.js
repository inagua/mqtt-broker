const Constants = require('./constants');
const mqtt = require('mqtt');
const client  = mqtt.connect(Constants.servers.local.url);

const message = process.argv[2] || `Hello mqtt from PLO at ${new Date()}`;

client.on('connect', function () {
    // console.log('>> Connected');
    client.publish(Constants.topics.goldeneye.infrastructure.root, message, function () {
        console.log('>> Published');
        client.end();
    })
});
