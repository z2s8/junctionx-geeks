var kafka = require('kafka-node');

var Producer = kafka.Producer,
    client = new kafka.Client('35.242.223.16'),
    producer = new Producer(client);


producer.on('ready', function () {
    console.log('Producer is ready');
});

producer.on('error', function (err) {
    console.log('Producer is in error state');
    console.log(err);
})

    payloads = [
        { topic: 'test', messages:['sdhkas', 'asd', 'd', 'f'] , partition: 0 }
    ];
    producer.send(payloads, function (err, data) {
            console.log(err, data);
    });

    var     Consumer = kafka.Consumer,
    consumer = new Consumer(client,
        [{ topic: 'test', offset: 0}],
        {
            autoCommit: false
        }
    );

    consumer.on('message', function (message) {
    console.log(message);
});

consumer.on('error', function (err) {
    console.log('Error:',err);
})

consumer.on('offsetOutOfRange', function (err) {
    console.log('offsetOutOfRange:',err);
})