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
                           <label class="labelcolor" for="formGroupExampleInput">You Send</label>
                           <input type="text" class="form-control" id="formGroupExampleInput" placeholder="amount">
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
                           <label class="labelcolor" for="formGroupExampleInput">Recipient Gets</label>
                           <input type="text" disabled class="form-control" id="formGroupExampleInput" placeholder="amount">
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
      <div class="row" style="height:100vh;">
         <div class="col-md-6 col-sm-12 cell-home" id="left-2">
            <div >
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
                              <p style="position: absolute; top :17%; left: 26%;">City</p>
                              <div style="position: absolute; top :24%; left: 28%; width: 20px; height: 20px; background: green;"></div>
                            </div>
                          </transition>

                          <transition name="city2">
                            <div>
                              <p style="position: absolute; top :86%; left: 55%;">City</p>
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
</style>


<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import anime from 'animejs';
// import Waypoint from "waypoints/lib/noframework.waypoints.min.js"

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
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

    startGif: function() {
      this.show = !this.show;

      if(this.show)
        document.getElementById("gif").src = require("@/assets/utvonal.gif");
    },

    scrollDown: function (){
      var elmnt = document.getElementById("right-2");
      elmnt.scrollIntoView({ behavior: 'smooth' });
    }
  },

  mounted(){
    this.countUp(),
    this.countUp2(),
    this.countUp3()
  }

  
}
</script>
