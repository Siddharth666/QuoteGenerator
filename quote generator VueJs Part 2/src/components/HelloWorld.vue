<template>
<html>
  <head>
    
  </head>
  <body>
    <div id="container">
      <h3 style="margin-left:300px">Random Quote generator using VueJs and NodeJs</h3>
      <p style="margin-left:1000px">Created by - Siddharth Singha</p>
  <div class="card, ss" style="">
    <div class="card-body">
     
      <button onClick="window.location.href=''" class="btn btn-warning">{{this.personality}}</button>
      <p class="card-text">{{ this.users }}</p>
    </div>
    <img class="card-img-bottom" v-bind:src="this.img" alt="Card image" style="width:100%">
  </div>


</div>

  </body>
  </html>
  
</template>

<script>

  import axios from 'axios';
 
  export default {
    name: '',
    quotez: '',
    data() {
      return {
        users: this,
        personality: this,
        quote: this,
        img: this,
        key: 'Hell yess',
      }
    },
   
    created: function() {
     axios.get('http://localhost:3001/r')
      .then(res => {
        
        console.log(res.data.Personality);
        console.log(res.data.Quote);
        console.log(res.data.image);
        
         this.users = JSON.stringify(res.data.Quote);
         this.personality = res.data.Personality;
         this.img = res.data.image;
      })
      .catch(error => console.log(error))
    }
  }

  // Arrow functions not suitable for VueJs, try avoiding
  // https://michaelnthiessen.com/this-is-undefined/
</script>

<style>
  h3 {
    margin-bottom: 5%;
  }
  .ss {
    margin-left: 400px;
    width:400px; border:solid 1px;
  }
  
</style>

