<template>
  <!-- Include the above in your HEAD tag -->
  <div class="d-flex justify-content-center formok">
    <form class="form">
      <div class="form-group">
        <label for="formGroupExampleInput">You send</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="amount">
      </div>

      <div class="dropdown">
        <a class="btn dropdown-toggle format" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img class="kep" src="../assets/gbr.png" alt="font">
          <span class="valuta">GBR</span>
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="#">
            <img class="kep" src="../assets/eur.png" alt="euro">
            <span class="valuta">EUR</span><span class="valuta_name">Euro</span>
          </a>
          <a class="dropdown-item" href="#">
            <img class="kep" src="../assets/gbr.png" alt="font">
            <span class="valuta">GBR</span><span class="valuta_name">British pound</span>
          </a>
          <a class="dropdown-item" href="#">
            <img class="kep" src="../assets/usd.png" alt="dollar">
            <span class="valuta">USD</span><span class="valuta_name">United States dollar</span>
          </a>
        </div>
      </div>
    </form>

    <form>
      <div class="form-group">
        <label for="formGroupExampleInput">Recipient gets</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="amount">
      </div>

      <div class="dropdown">
        <a class="btn dropdown-toggle format" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img class="kep" src="../assets/gbr.png" alt="font">
          <span class="valuta">GBR</span>
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="#">
            <img class="kep" src="../assets/eur.png" alt="euro">
            <span class="valuta">EUR</span><span class="valuta_name">Euro</span>
          </a>
          <a class="dropdown-item" href="#">
            <img class="kep" src="../assets/gbr.png" alt="font">
            <span class="valuta">GBR</span><span class="valuta_name">British pound</span>
          </a>
          <a class="dropdown-item" href="#">
            <img class="kep" src="../assets/usd.png" alt="dollar">
            <span class="valuta">USD</span><span class="valuta_name">United States dollar</span>
          </a>
        </div>
      </div>
    </form>

    <form class="elkuldgomb">
      <div>
        <a class="ok btn" href="submit">
          <span data-text="S">S</span>
          <span data-text="U">U</span>
          <span data-text="B">B</span>
          <span data-text="M">M</span>
          <span data-text="I">I</span>
          <span data-text="T">T</span>
        </a>
      </div>
    </form>

  </div>
  
</template>
<style scoped>

  .elkuldgomb{
    display: block;
  }
  .formok{
    max-width: 1200px;
    justify-content: space-around !important;
    margin-left: auto;
    margin-right: auto;
  }
  .form-control{
    color:#000;
  }
  .format{
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    border: 2px solid #e9ecee;
    color: #000;
  }
  .valuta{
    padding-left: 10px;
    font-size: 24px;
  }
  .valuta_name{
    padding-left: 10px;
    color: #6F8691;
  }
  .kep{
    width: 50px;
  }
  .dropdown-item:hover{
    background-color: #E2E6E8;
  }
  .ok {
      transform:translate(-50%,-50%);
      width:125px;
      height:45px;
      padding:0 1rem;
      line-height:45px;
      text-align:center;
      /* border:2px solid #fff; */
      font-size:24px;
      text-decoration:none;
      text-transform:uppercase;
      text-align:center;
      font-family:sans-serif;
      color:#fff;
      background-color:#00B9FF;
      overflow:hidden;
      border-radius:12px;
  }
  .ok span  {
      display:inline-block;
      transition:0.5s;
  }
  .ok span:nth-child(odd):before {
      content:attr(data-text);
      position:absolute;
      transform:translateY(100%);
  }
  .ok span:nth-child(odd){
      transform:translateY(-100%);
  }
  .ok:hover span:nth-child(odd){
      transform:translateY(0);
      color:#fff;
  }
  .ok span:nth-child(even):before {
      content:attr(data-text);
      position:absolute;
      transform:translateY(-100%);
  }

  .ok span:nth-child(even){
      transform:translateY(100%);
  }
  .ok:hover span:nth-child(even){
      transform:translateY(0);
      color:#fff;
  }
</style>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
