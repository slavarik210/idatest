<template>
  <div class="item"> 
      <p>Получатель : {{payAdress}}</p>
      <p>Сумма : {{payPrice}} руб.</p>
      <p>Дата отправки {{payDate}}</p>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    props: {
        value: Object
    }
})
export default class CompletePayment extends Vue {
    get payAdress () {
      return this.value.adress
    }
    get payPrice () {
      return this.value.price
    }
    get payDate () {
      return this.value.data
    }
    mounted () {
        this.$store.state.transactions
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .item {
    padding: 10px;
    background-color: aliceblue;
    margin: 5px;

  }
</style>
