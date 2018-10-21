<template>
<div class="container">
<div class="row">
  <div class="col-md-6 col-sm-12 cell-home" id="left-1">
    <div></div>
  </div>
  <div class="col-md-6 col-sm-12 cell-home" id="right-1">
    <div class="d-flex justify-content-center formok">
          <form class="form">
      <div class="row">
        <div class="col-md-6">
<div class="form-group">
        <label for="formGroupExampleInput">You send</label>
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
        <label for="formGroupExampleInput">Recipient gets</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="amount">
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
       <div class="row">

    </div>
      
    </form>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-md-6 col-sm-12 cell-home" id="left-2">
    <div></div>
  </div>
  <div class="col-md-6 col-sm-12 cell-home" id="right-2">
    <div></div>
  </div>
</div>

</div>
</template>
<style scoped>
.cell-home {
  height: 100vh;
}
.elkuldgomb {
  display: block;
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
.format {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 2px solid #e9ecee;
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
</style>


<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
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
      ]
    };
  },
  methods: {
    selectFromCurrency: function(option){

      if(this.selectedTo.currency == option.currency) {
        this.selectedTo = this.selectedFrom;
      }

      this.selectedFrom = option;
    },

    selectToCurrency: function(option){
      if(this.selectedFrom.currency == option.currency) {
        this.selectedFrom = this.selectedTo;
      }

      this.selectedTo = option;
    }
  }
};
</script>
