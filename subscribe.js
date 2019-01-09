const Constants = require('./constants');
const mqtt = require('mqtt');
const client  = mqtt.connect(Constants.servers.local.url);

// https://www.hivemq.com/blog/mqtt-essentials-part-5-mqtt-topics-best-practices/
client.on('connect', function () {
    console.log('>> Connected');
    const topic = Constants.topics.goldeneye.all;
    client.subscribe(topic, function (err) {
        console.log('>> Subscribed to', topic);
        if (err) {
            console.error("/!\\ Error:", err);
        }
    });
});

client.on('message', function (topic, message) {
    console.log(topic, message.toString());
});