var kafka = require('kafka-node');

class KafkaService {
    constructor() {
        this.Producer = kafka.Producer;
        this.Consumer = kafka.Consumer;
        this.Client = kafka.Client;
    
        this.client = new this.Client('35.242.223.16');
        this.producer = new this.Producer(this.client);
    }

    subscribe(topic, callback) {

        var consumer = new this.Consumer(this.client,
            [{ topic: topic, offset: 0 }],
            {
                autoCommit: false
            }
        );

        consumer.on('message', function (message) {
            callback(message);
        });
    }

    publish(topic, messages, callback) {
        this.producer.on('ready', function () {
            console.log('Producer is ready');
            let payload = [
                { topic: topic, messages: messages, partition: 0 }
            ];

            this.producer.send(payload, function (err, data) {
                console.log(err, data);
                callback(err, data);
            });
        }.bind(this));
    }



}


module.exports = KafkaService;

