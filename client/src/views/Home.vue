<template>
  <div class="home">
    <h3 class="display-2">Make Payment</h3>
     <v-text-field
     class="text-field"
      label="Amount"
      outline
      v-model="price"
      >
    </v-text-field>
    <v-btn @click="pay(price)" style="margin-top:3rem" color="info">Place Order</v-btn>
    </div>
</template>

<script>
  import OrderService from '../services/OrderService';
  export default {
   data(){
     return{
       price:''
     }
   },
   methods:{
     async pay(price){
      const response = await OrderService.createOrder(price);
      console.log(response.data);
     }

     
   }
  }
</script>
<style>
.home{
  text-align: center;
}
.text-field{
  width: 30%;
  left: 50%;
  transform: translate(-50%,50%);
}
</style>

