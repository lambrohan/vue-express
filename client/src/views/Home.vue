<template>
  <div class="home">
    <h3 class="display-2">Make Payment</h3>
     <v-text-field
     class="text-field"
      label="Amount"
      outline
      >
    </v-text-field>
    <v-btn style="margin-top:3rem" color="info">Place Order</v-btn>
    </div>
</template>

<script>

  export default {
    components: {
      
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

