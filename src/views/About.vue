<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 class="alert alert-success">{{info}}</h2>
    <br />
    <div class="row">
      <div class="col-3">
        Right sidebar is the right sidebar
      </div>
      <div class="col-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div class="col-3">
        Left sidebar is the left sidebar
      </div>
    </div>
    <div class="alert alert-info" role="alert">
      A simple info alert—check it out!
      It's friendlier than a red alert.
    </div>
  </div>
</template>

<script>
  const axios = require('axios');

  export default {
    data () {
      return {
        info: 0,
      }
    },

    mounted() {
      console.log('hu');
      axios
        .get('http://localhost:9090/counter')
        .then(response => (this.info = response.data.count))
    }
  }
</script>
