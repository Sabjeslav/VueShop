<template>
  <div id="main">
    <h1>Кошик</h1>
    <template v-if="$store.state.cartContent.length > 0">
      <div class="goods" v-for="item in $store.state.cartContent" :key="item.id">
        <img v-bind:src="item.src" >
        <br>
        Name: {{item.item}} <br>
        Price: {{item.price}} <br>
        Amount: {{item.amount}} <br>
        Total Price: {{item.totalPrice}} <br>
      </div>


    </template>
    <template v-else>
      <div class="goods">
        <h1>Кошик порожній</h1>
      </div>
    </template>
  </div>
</template>


<style>
#main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.goods {
  display: flex;
  align-items: center;
  width: 50%;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: auto;
  margin-bottom: 1%;
}
</style>

<script>
export default {
  computed:{
    totalPrice() {
      let total = 0;
      this.$store.getters.getCartContent.forEach(item=>{
        total += item.totalPrice;
      })
      return total.toFixed(2);
    }
  }
}
</script>