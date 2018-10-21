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
            }
        ];

        simpleTransfers.forEach(tf => {
            setTimeout(() => {
                var txDone = {}
                txDone.currencyFrom = tf.currencyFrom;
                txDone.currencyTo = tf.currencyTo;
                txDone.exchangeRate = tf.exchangeRate;
                txDone.feePercent = 0.03;
                txDone.guaranteedRateHours = 96;
                txDone.concurrencies = [
                    {
                        name: "Eastern Union",
                        exchangeRate: tf.exchangeRate * Math.random() * (1.1 - 0.7) + 0.7,
                        feePercent: 0.3,
                        days: Math.floor(Math.random() * (5 - 2) + 2), // 2-4 days
                    }
                ];
                txDone.days = Math.floor(Math.random() * (5 - 2) + 2); // 2-4 days
                
                KafkaMessageGenerator.publishGeneratedTransfer(txDone);
                console.log(txDone);
    
            }, 15000);
            
        });

       
    }

    static publishGeneratedTransfer(transfer) {
        
        var kafkaService = new KafkaService();
        kafkaService.publish("nottest-2", [JSON.stringify(transfer)], (err, data) => {
            console.log(err, data);
        });
    }
}

module.exports = KafkaMessageGenerator;

