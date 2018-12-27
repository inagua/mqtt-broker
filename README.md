# GoldenEye - Broker

## Setup

- https://www.npmjs.com/package/mosca

## Client as test

- https://github.com/mqttjs/MQTT.js
- `/publish.js`
- `/subscribe.js`

## Run

Launch the server:

```
npm start
```

Launch the observer:

```
node subscribe.js
```

Launch the publisher:

```
node publish.js "Hy jack!"
```
