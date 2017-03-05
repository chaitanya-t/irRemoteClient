var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://hostname')
//hostname = name/ip of MQTT Broker 
var exec = require('child_process').exec;
client.on('connect', function () {
  client.subscribe('/control')
})

client.on('message', function (topic, message) {
  // message is Buffer
console.log(message.toString());

exec('irsend SEND_ONCE /etc/lirc/own_remote3.conf '+ message.toString());
  //message = command name received from server module for a specific remoteKey pressed
})
