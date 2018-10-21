<template>
   <div>
     <div>
        <nav class="navbar navbar-light bg-light" style="height: 10vh;">
          <a class="navbar-brand" href="#">
            <img src="../assets/Transferwise_logo.png" height="50" class="d-inline-block align-top" alt="">
          </a>
        </nav>  
     </div>
      <div class="row">
         <div class="col-md-6 col-sm-12 cell-home p-0" id="left-1">
            <div>
              <div class="row first"> 
                In this month around the world     
                <img src="../assets/worldwide.png" style="height: 30pt; padding-left: 10px; padding-bottom: 5px;" alt="icon">
              </div>
        <div class= "elso animated zoomIn">
         <div class="row second"> 
                <div id="countup">
                  {{ intCount }}
                </div>
        </div>
        <div class="row third"> 
          transactions
        </div>
        </div>
        <div class= "masodik animated zoomIn delay-1s">
        <div class="row fourth"> 
          <div id="countup2">
           {{ intCount2 }}
          </div>
        </div>
        <div class="row fifth"> 
          satisfied customer
        </div>
        </div>
        <div class="harmadik animated zoomIn delay-2s">
        <div class="row sixth"> 
          <div id="countup3">
           {{ intCount3 }}$
          </div>
        </div>
        <div class="row seventh"> 
          saved money 
        </div>
         </div>
            </div>
         </div>
         <div class="col-md-6 col-sm-12 cell-home p-0" id="right-1">
            <div class="d-flex justify-content-center align-items-center formok">
               <form class="form">
                  <div class="row">
                     <div class="col-md-6">
                        <div class="form-group">
                           <label for="formGroupExampleInput">You send</label>
                           <input type="text" class="form-control" id="formGroupExampleInput" placeholder="amount" v-model="amountFrom">
                        </div>
                        <div class="dropdown">
                           <a class="btn dropdown-toggle format" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           <img class="kep" :src="require(`@/assets/${selectedFrom.image}`)" alt="font">
                           <span class="valuta">{{selectedFrom.currency}}</span>
                           </a>
                           <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink" style="cursor: pointer;">
                              <div class="dropdown-item d-flex align-items-center" v-for="option in options" :key="option.currency" :value="option.currency" v-on:click="selectFromCurrency(option)">
                                 <img class="kep" :src="require(`@/assets/${option.image}`)" alt="euro">
                                 <span class="valuta">{{option.currency}}</span><span class="valuta_name">{{ option.name }}</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-6">
                        <div class="form-group">
                           <label for="formGroupExampleInput">Recipient gets</label>
                           <input type="text" class="form-control" id="formGroupExampleInput" placeholder="amount" v-model="amountTo">
                        </div>
                        <div class="dropdown">
                           <a class="btn dropdown-toggle format" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           <img class="kep" :src="require(`@/assets/${selectedTo.image}`)" alt="font">
                           <span class="valuta">{{ selectedTo.currency }}</span>
                           </a>
                           <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" style="cursor: pointer;">
                              <div class="dropdown-item d-flex align-items-center" v-for="option in options" :key="option.currency" :value="option.currency" v-on:click="selectToCurrency(option)">
                                 <img class="kep" :src="require(`@/assets/${option.image}`)" alt="euro">
                                 <span class="valuta">{{option.currency}}</span><span class="valuta_name">{{ option.name }}</span>
                              </div>
                           </div>
                           
                        </div>
                     </div>
                  </div>
                  <div class="row pt-5">
                    <img id="arrowImage" class="tovabb animated" v-on:click="scrollDown" src="../assets/nyil.png" alt="nyil">
                  </div>
               </form>
            </div>
         </div>
      </div>
      <div class="row">
         <div class="col-md-6 col-sm-12 cell-home d-flex  justify-content-center align-items-center" id="left-2">
            <div>
                
    <p id = "titleChart">Amount of delivered money</p>
    <div class="canvas-container">
      <canvas id="Mychart"></canvas>
    </div>
    
  



            </div>
         </div>
         <div class="col-md-6 col-sm-12 cell-home border" id="right-2">

           <table class="table">
            <tbody>
              <tr>
                <td>
                  <img class="proba" style="max-height: 70px; z-index: 1" src="../assets/coin_blue.png" alt="Card image cap"  >                  
                </td>
                <td>
                  <span class="proba" style="color: #00B9FF; font-size: 22pt;">1000$</span>
                </td>
                <td>
                  <img class="proba" style="max-width: 70px;" src="../assets/footprint_blue.png" alt="Card image cap">
                </td>
                <td>
                  <img class="proba" style="max-width: 70px;" src="../assets/moneysave_blue.png" alt="Card image cap">
                </td>
              </tr>

              <tr>
                <td style="padding-bottom: 0;"><h5>You send</h5></td>
                <td style="padding-bottom: 0;"><h5>You save</h5></td>
                <td style="padding-bottom: 0;"><h5>In 2 days</h5></td>
                <td style="padding-bottom: 0;"><h5>Recipient gets</h5></td>
              </tr>

              <tr>
                <td style="padding: 0;"><p>1000 HUF</p></td>
                <td></td>
                <td></td>
                <td style="padding: 0;"><p>100 USD</p></td>
              </tr>
            </tbody>
          </table>
                     <transition name="fade">
                        <div style="position: relative;" >
                          <img id="gif" src="../assets/utvonal.gif" style="max-width: 70%; max-height: 100%;">

                          <transition name="city1">
                            <div>
                              <p style="position: absolute; top :17%; left: 26%;" v-model="city1">City</p>
                              <div style="position: absolute; top :24%; left: 28%; width: 20px; height: 20px; background: green;"></div>
                            </div>
                          </transition>

                          <transition name="city2">
                            <div>
                              <p style="position: absolute; top :86%; left: 55%;" v-model="city2">City</p>
                              <div style="position: absolute; top :81%; left: 56%; width: 20px; height: 20px; background: green;"></div>
                            </div>
                          </transition>
                        </div>
                     </transition>
               
         </div>
      </div>
   </div>
</template>

<style scoped>

.canvas-container {

  
 
  position: relative;
  width: 800px;
  height: 100%;

}
.cell-home {
  height: 100vh;}
  
.proba:hover {
  opacity: 0.5;
}
table{
  font-family: 'Abel', sans-serif;
  margin-top: 20px;
}
table tr td{
  border: none;
  text-align: center;
  vertical-align: middle;
}
.row{
  margin:0 !important;
  
}

#countup::selection{
  background-color: rgba(255, 215, 0, .75)
 }

/* #countup {
  min-height: 71px;
  
  display: block;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  font-family: 'Segoe UI', sans-serif;
  font-size: 2rem;
  letter-spacing: 1.8px;
  color: #00B9FF;
  
} */
.card-img-top{
  
  justify-content: center;
  align-items: center;
  display:block;
  
}
.malac{
  height:71px;

}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#left-1{ 
/* border: 1px solid black; */
height: 90vh;
/* background-color: #1B2C4B;    */
background-image: url('../assets/hatter2.jpg') ; 
background-size: cover;   
}
.first{
  color: #fff;
  justify-content: center;
  align-items: center;
  display:block;
  padding-top: 4vh;
  font-size: 22pt;
  font-family: 'Abel', sans-serif;
  margin: 0;
}


.second ,.fourth, .sixth{
  padding-top: 8vh;
  color: #fff;
  justify-content: center;
  align-items: center;
  display:block;
  font-size: 35pt;
  font-family: 'Abel', sans-serif;
  color: #00B9FF;
  margin: 0;
}

.third ,.fifth, .seventh{
  color: #fff;
  justify-content: center;
  align-items: center;
  display:block;
  font-size: 19pt;
  font-family: 'Abel', sans-serif;
  margin: 0;
}
.amount{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-top: 20vh;
}
 .kep{
   width: 50px;
 }
 .kep{
   width: 50px;
 }
#right-1{
  background-color: #1B2C4B;
  font-family: 'Abel', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  
  /* padding-top: 20vh; */
}

/* .cell-home {
  height: 100vh;
} */
.elkuldgomb {
  display: block;
}
.labelcolor{
  color:#00B9FF;
  font-size: 16pt;
}
.formok {
  max-width: 1200px;
  justify-content: space-around !important;
  margin-left: auto;
  margin-right: auto;
}
.form-control {
  color: #000;
}
.tovabb{
  justify-content: space-around !important;
  display: flex;
  justify-content: bottom;
  align-items: center;
  align-content: bottom;
  margin:auto;
  /* margin-left: auto;
  margin-right: auto; */
  
  height: 50px;
}
.format {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 2px solid #e9ecee;
  background-color: #fff;
  color: #000;
}
.valuta {
  padding-left: 10px;
  font-size: 24px;
}
.valuta_name {
  padding-left: 10px;
  color: #6f8691;
}
.kep {
  width: 50px;
}
.dropdown-item:hover {
  background-color: #e2e6e8;
}
.ok {
  transform: translate(-50%, -50%);
  width: 125px;
  height: 45px;
  padding: 0 1rem;
  line-height: 45px;
  text-align: center;
  /* border:2px solid #fff; */
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-family: sans-serif;
  color: #fff;
  background-color: #00b9ff;
  overflow: hidden;
  border-radius: 12px;
}
.ok span {
  display: inline-block;
  transition: 0.5s;
}
.ok span:nth-child(odd):before {
  content: attr(data-text);
  position: absolute;
  transform: translateY(100%);
}
.ok span:nth-child(odd) {
  transform: translateY(-100%);
}
.ok:hover span:nth-child(odd) {
  transform: translateY(0);
  color: #fff;
}
.ok span:nth-child(even):before {
  content: attr(data-text);
  position: absolute;
  transform: translateY(-100%);
}

.ok span:nth-child(even) {
  transform: translateY(100%);
}
.ok:hover span:nth-child(even) {
  transform: translateY(0);
  color: #fff;
}

#countup::selection {
  background-color: rgba(255, 215, 0, 0.75);
}
/* #countup {
  min-height: 71px;

  display: block;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  font-family: "Segoe UI", sans-serif;
  font-size: 2rem;
  letter-spacing: 1.8px;
  color: #00b9ff;
} */
.card-img-top {
  justify-content: center;
  align-items: center;
  display: block;
}
.malac {
  height: 71px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.city1-enter-active,
.city1-leave.active {
  transition: opacity 1s;
}

.city1-enter,
.city1-leave-to {
  opacity: 0;
}

.city2-enter-active,
.city2-leave.active {
  transition: opacity 1s;
}

.city2-enter,
.city2-leave-to {
  opacity: 0;
}

#titleChart {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 20px;
}
</style>


<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import anime from 'animejs';
// import Waypoint from "waypoints/lib/noframework.waypoints.min.js"
import Chart from "chart.js";
import axios from "axios";


export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      city1: 'Amsterdam',
      city2: 'Brussels',
      estimate: {},
      amountFrom: 100,
      amountTo: 111.12,
      ListOfTran: [
        {
          id: 1,
          currencyFrom: "HUF",
          currencyTo: "EUR",
          exchangeRate: 350,
          feePercent: 0.35,
          beginAmount: 10000,
          saveUpTo: 22,
          guaranteedRateHours: 96,
          concurrencies: [
            {
              name: "Eastern Union",
              exchangeRate: 320,
              feePercent: 0,
              beginAmount: 10000,
              days: 3
            },
            {
              name: "CBHS",
              exchangeRate: 350,
              beginAmount: 10000,
              feePercent: 0.40,
              days: 4
            }
          ],

          days: Math.random() * 4 + 1
        },

        {
          id: 2,
          currencyFrom: "EUR",
          currencyTo: "HUF",
          exchangeRate: Math.random() * 325 + 300,
          fee: Math.random() * 6 + 1,
          saveUpTo: 22,
          guaranteedRateHours: 96,
          concurrencies: [
            {
              name: "Eastern Union",
              exchangeRate: 220,
              fee: 333,
              days: 3
            },
            {
              name: "CBHS",
              exchangeRate: 210,
              fee: 223,
              days: 4
            }
          ],

          days: Math.random() * 4 + 1
        }
      ],    
      count:0,
      count2:0,
      count3:0,
      selectedFrom: {
        name: "Euro",
        currency: "EUR",
        image: "eur.png"
      },
      selectedTo: {
        name: "United States dollar",
        currency: "USD",
        image: "usd.png"
      },
      options: [
        {
          name: "Euro",
          currency: "EUR",
          image: "eur.png"
        },
        {
          name: "United States dollar",
          currency: "USD",
          image: "usd.png"
        },
        {
          name: "Great Britain pound",
          currency: "GBP",
          image: "gbr.png"
        }
      ],
      // intCount: 0,
      // show: true,
      // showc1: true,
      // showc2: true
    };
  },
  mounted: function() {
          this.loadChart();
    this.getEstimate();
    this.updateCharts();
    this.countUp(),
    this.countUp2(),
    this.countUp3()
    },
    watch: {
      selectedFrom: {handler: function(newOne, oldOne) {
        // if(newOne.currencyTo)
        this.getEstimate()
      }, deep: true},
      selectedTo: {handler: function(newOne, oldOne) {
        // if(newOne.currencyTo)
        this.getEstimate()
      }, deep: true},
      amountFrom: {handler: function(newOne, oldOne) {
        this.calcEstimate()
        this.updateCharts()
      }}
    },
  methods: {
    countUp() {
      anime({
        targets: this.$data,
        count: 215643,
        duration: 2000,
        delay: 100,
        easing: 'easeInCubic'
      })
    },

    countUp2() {
      anime({
        targets: this.$data,
        count2: 54000,
        duration: 3000 ,
        delay: 200,
        easing: 'easeInCubic'
      })
    },

    countUp3() {
      anime({
        targets: this.$data,
        count3: 1765,
        duration: 4500,
        delay: 100,
        easing: 'easeInCubic'
      })
    },

    selectFromCurrency: function(option) {
      if (this.selectedTo.currency == option.currency) {
        this.selectedTo = this.selectedFrom;
      }

      this.selectedFrom = option;
    },

    selectToCurrency: function(option) {
      if (this.selectedFrom.currency == option.currency) {
        this.selectedFrom = this.selectedTo;
      }

      this.selectedTo = option;
    },

    getEstimate: function() {
      let that = this;
      axios
      .post('http://localhost:9090/estimate', {currencyFrom: this.selectedFrom.currency, currencyTo: this.selectedTo.currency})
      .then(function(data) {
        if (true) {
          console.log('hey', data.data);
          that.estimate = data.data;
          that.calcEstimate();
          that.updateCharts();
        }
      })
    },

    calcEstimate: function() {
      this.amountTo = (this.amountFrom - this.amountFrom * this.estimate.feePercent)* this.estimate.exchangeRate;
      return this.amountTo;
    },

    startGif: function() {
      this.show = !this.show;

      if(this.show)
        document.getElementById("gif").src = require("@/assets/utvonal.gif");
  },


  
  // mounted() {
  //   this.loadChart();
  //   this.getEstimate();
  //   this.updateCharts();
  //   this.countUp(),
  //   this.countUp2(),
  //   this.countUp3()
  // },
  
    scrollDown: function (){
      var elmnt = document.getElementById("right-2");
      elmnt.scrollIntoView({ behavior: 'smooth' });
    },
      addValues() {
      this.ListOfTran.forEach(element => {
        if (element.currencyFrom == "HUF" && element.currencyTo == "EUR") {
          var valuee = element.exchangeRate;
        }
      });
    },

    updateCharts: function() {
      let transData = this.estimate;
      if (!transData || !transData.concurrencies || false) {
        return;
      }
      let transferwiseDeliered = this.calcDelivered(transData.exchangeRate, transData.feePercent, this.amountFrom);
      this.myChart.data.labels[0] = 'TransferWise';
      this.myChart.data.datasets[0].data[0] = transferwiseDeliered;
      
      for (var i = 0; i < transData.concurrencies.length; i++) {
        let currentData = transData.concurrencies[i];
        let currentDelivered = this.calcDelivered(currentData.exchangeRate, currentData.feePercent, this.amountFrom);
        console.log(currentData.name, currentDelivered);
        this.myChart.data.labels[i + 1] = currentData.name;
        this.myChart.data.datasets[0].data[i + 1] = currentDelivered;
      }

      this.myChart.update();

    },

    updateChartsOld() {
      let transData = this.ListOfTran[0]
      let transferwiseDeliered = this.calcDelivered(transData.exchangeRate, transData.feePercent, transData.beginAmount);
      this.myChart.data.labels[0] = 'TransferWise';
      this.myChart.data.datasets[0].data[0] = transferwiseDeliered;
      
      for (var i = 0; i < transData.concurrencies.length; i++) {
        let currentData = transData.concurrencies[i];
        let currentDelivered = this.calcDelivered(currentData.exchangeRate, currentData.feePercent, currentData.beginAmount);
        console.log(currentData.name, currentDelivered);
        this.myChart.data.labels[i + 1] = currentData.name;
        this.myChart.data.datasets[0].data[i + 1] = currentDelivered;
      }

      this.myChart.update();

    },

    calcDelivered(exchangeRate, feePercent, beginAmount) {
      let fee = beginAmount * feePercent;
      let delivered = (beginAmount - fee) * exchangeRate;
      return delivered;
    },
loadChart() {
      var d = new Date();
      var n = d.getHours();
      let ctx = document.getElementById("Mychart");
      this.myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Eastern Union", "CBHS"],
          datasets: [
            {
              label: "",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                '#00B9FF',
                '#1B2C4B',
                '#1B2C4B',
                '#1B2C4B',
                '#1B2C4B',
                '#1B2C4B'
              ],
              borderColor: [
                '#00B9FF',
                '#1B2C4B',
                '#1B2C4B',
                '#1B2C4B',
                '#1B2C4B',
                '#1B2C4B'
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem) {
        console.log(tooltipItem)
          return tooltipItem.yLabel;
        }
      }
    },
          scales: {
            
            yAxes: [
              {
                gridLines: {
                  drawOnChartArea: false
                },
                ticks: {
                  beginAtZero: true,
                  fontColor: "#1B2C4B",
                  fontFamily: "'Montserrat', 'sans-serif'",
                  fontStyle: "bold",
                  fontSize: 18,
                  maxTicksLimit: 6,
                }
              }
            ],
            xAxes: [
              {
                barPercentage: 9,
    categoryPercentage: 0.1,
                   gridLines: {
                  drawOnChartArea: false,
                   
                   },
                   ticks: {
                    fontColor: "#1B2C4B",
                    fontFamily: "'Montserrat', 'sans-serif'",
                    categorySpacing: 0,
                    fontStyle: "bold",
                    fontSize: 18
                   }
              }
            ]
          }
        }
      });
    }
    },

  computed: {
   intCount() {
      return Math.trunc(this.count).toLocaleString()
    },
    intCount2() {
      return Math.trunc(this.count2).toLocaleString()
    },
    intCount3() {
      return Math.trunc(this.count3).toLocaleString()
    }
  },


    }




  

</script>
