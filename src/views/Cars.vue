<template>
  <div class="container">
    <h2>These are my cars</h2>
    <div v-for="car in cars">
        <div v-for="(item, key, index) in car" class="row">
          <div class="col-6 title">
            {{ key }}:  
          </div>
          <div class="col-6 value">
           {{ item }}
          </div>
        </div>
      <hr/>
    </div>

  </div>
</template>

<script>
  const axios = require('axios');

  export default {
    data () {
      return {
        cars: [],
      }
    },

    mounted() {
      console.log('Vroom Vroom [cars arriving...]');
      axios
        .get('http://localhost:9090/cars')
        .then(response => (this.cars = response.data))
    }
  }
</script>

<style scoped>
  ul {
    padding-bottom: 20px;
  }
  .title {
    text-align: right;
  }
  .value {
    text-align: left;
  }
</style>