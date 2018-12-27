const Constants = require('./constants');
const mqtt = require('mqtt');
const client  = mqtt.connect(Constants.servers.local.url);

client.on('connect', function () {
    console.log('>> Connected');
    client.subscribe(Constants.topic, function (err) {
        console.log('>> Subscribed to', Constants.topic);
        if (err) {
            console.error("/!\\ Error:", err);
        }
    });
});

client.on('message', function (topic, message) {
    console.log(topic, message.toString());
});