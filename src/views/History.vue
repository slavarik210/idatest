<template>
    <div class="payment"> 
        <complete-payment 
            v-for="(item, index) in data"
            :key="`Транзакция № ${index}`"
            :value="item"
        />
    </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import CompletePayment from '@/components/CompletePayment.vue'

@Component({
    components: {
        CompletePayment
    }

})
export default class History extends Vue {
    data = null
    mounted () {
        console.log(this.$store.state.transactions)
        this.data = this.$store.state.transactions
    }
}
</script>
<style scoped lang="scss">
  .payment {
    position: absolute;
    width: 500px;
    left: 30%;
  }
</style>