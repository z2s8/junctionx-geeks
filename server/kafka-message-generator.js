const KafkaService = require('./kafka-service');

class KafkaMessageGenerator {

    contructor() {

    }

    generateTransfer() {

        var simpleTransfers = [
            {
                currencyFrom: "EUR",
                currencyTo: "GBP",
                exchangeRate: 0.88090,
                cities: [
                    "Berlin", "Brussels", "Paris", "London"
                ],
                intervals: [
                    12, 8, 24
                ]
            },
            {
                currencyFrom: "GBP",
                currencyTo: "EUR",
                exchangeRate: 1.13520,
                cities: [
                    "London", "Paris", "Brussels", "Berlin"
                ],
                intervals: [
                    24, 8, 12
                ]
            },
            {
                currencyFrom: "GBP",
                currencyTo: "USD",
                exchangeRate: 1.30715,
                cities: [
                    "London", "Washington, D.C.", "New York"
                ],
                intervals: [
                    48, 10
                ]
            },
            {
                currencyFrom: "USD",
                currencyTo: "GBP",
                exchangeRate: 0.76502,
                cities: [
                    "New York", "Washington, D.C.", "London"
                ],
                intervals: [
                    10, 48
                ]
            },
            {
                currencyFrom: "USD",
                currencyTo: "EUR",
                exchangeRate: 0.86850,
                cities: [
                    "New York", "London", "Amsterdam", "Zurich"
                ],
                intervals: [
                    48, 4, 16
                ]

            },
            {
                currencyFrom: "EUR",
                currencyTo: "USD",
                exchangeRate: 1.15100,
                cities: [
                    "Zurich", "Amsterdam", "London", "New York"
                ],
                intervals: [
                    16, 4, 48
                ]
            },
                        {
                currencyFrom: "EUR",
                currencyTo: "USD",
                exchangeRate: 1.15100,
                cities: [
                    "Zurich", "Amsterdam", "London", "New York"
                ],
                intervals: [
                    16, 4, 48
                ]
            }
        ]

        for(var j = 0; j < simpleTransfers.length - 1; j++){
            console.log('wtf we even doin')
            
            setTimeout(function() {
                console.log('we are about to emit one', j, simpleTransfers[j])
                KafkaMessageGenerator.createTransfer(simpleTransfers[j]);
            }, 2000 * (j+1))

        }


    }

    static createTransfer(tf) {

            
            var txDone = {}
            console.log('tf is wtf', tf)
            txDone.currencyFrom = tf.currencyFrom;
            txDone.currencyTo = tf.currencyTo;
            txDone.exchangeRate = tf.exchangeRate;
            txDone.feePercent = 0.03;
            txDone.guaranteedRateHours = 96;
            txDone.cities = tf.cities;
            txDone.concurrencies = [
                {
                    name: "Eastern Union",
                    exchangeRate: tf.exchangeRate * Math.random() * (1.1 - 0.8) + 0.8,
                    feePercent: 0.3,
                    days: Math.floor(Math.random() * (5 - 2) + 2), // 2-4 days
                },
                {
                    name: "Growing Universe",
                    exchangeRate: tf.exchangeRate * Math.random() * (1.1 - 0.6) + 0.6,
                    feePercent: 0.3,
                    days: Math.floor(Math.random() * (5 - 2) + 2), // 2-4 days
                },
                {
                    name: "Kilo Money",
                    exchangeRate: tf.exchangeRate * Math.random() * (1.0 - 0.8) + 0.8,
                    feePercent: 0.3,
                    days: Math.floor(Math.random() * (5 - 2) + 2), // 2-4 days
                },
                {
                    name: "BSCH",
                    exchangeRate: tf.exchangeRate * Math.random() * (1.0 - 0.6) + 0.6,
                    feePercent: 0.3,
                    days: Math.floor(Math.random() * (5 - 2) + 2), // 2-4 days
                },
                {
                    name: "Yoddle Union",
                    exchangeRate: tf.exchangeRate * Math.random() * (0.9 - 0.6) + 0.6,
                    feePercent: 0.3,
                    days: Math.floor(Math.random() * (5 - 2) + 2), // 2-4 days
                }
            ];
            txDone.intervals = tf.intervals;

            var sum = 0;
            for (var i = 0; i < tf.intervals.length; i++) {
                sum += tf.intervals[i];
            }
            txDone.days = Math.ceil(sum);

            KafkaMessageGenerator.publishGeneratedTransfer(txDone, function(err, data){
                console.log('we just published', data);
            });

       

    }

    static publishGeneratedTransfer(transfer, callback) {

        var kafkaService = new KafkaService();
        kafkaService.publish("nottest-2", [JSON.stringify(transfer)], (err, data) => {
            console.log(err, data);
            callback(err, data);
        });
    }
}

module.exports = KafkaMessageGenerator;

