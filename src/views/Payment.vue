<template>
    <div class="payment"> 
      <p> Успешно ! </p>
      <p>{{name}}, подождите 5 секунд </p>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    props: {
        payment: Object,
        holderInfo: Object
    }
})
export default class Payment extends Vue {
  get name () {
    return this.holderInfo.name
  }
  mounted () {
    if (this.payment === undefined || this.holderInfo === undefined) {
      this.$router.push({name:'home', params: {}})
    } else {
      this.$store.commit('addHistory' , this.payment)
      setTimeout(() => {
        this.$router.push({name:'history', params: {}})
      }, 4000);
    }
  }
}
</script>
<style scoped lang="scss">
.payment {
  position: absolute;
  left: 30%;
  background-color: #f8f8ff;
  padding: 10px;
  width: 500px;
  height: 300px;
  text-align: center;
  p {
    font-size: 25px;
    vertical-align: bottom;
  }
}
</style>