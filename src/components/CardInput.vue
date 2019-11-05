<template>
  <div class="card-info"> 
    <div class="card-info__payment">
      <p>Номер карты</p>
      <input 
          v-for="(card , index) in cards"
          :key="`card ${index}`"
          type = "text"
          @blur="isFully(index, $event)"
          @keypress="isNumber($event)"
          maxlength="4"
          minlength="4"
          placeholder="XXXX"
      >
    </div>
    <div class="card-info__cvv">
      <p>Код CVV2 / CVC2</p>
      <input
          type = "text"
          @blur="cvv($event)"
          @keypress="isNumber($event)"
          maxlength="3"
          minlength="3"
          placeholder="XXX"
      >
    </div>
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
export default class CardInput extends Vue {
    cards = [null,null,null,null]
    

    get card () {
      return this.value.card
    }
    set card (val) {
      this.$emit('input', {
            ...this.value, 
            card: val
        })
    }

    isNumber(event) {
      event = (event) ? event : window.event;
      var charCode = (event.which) ? event.which : event.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        event.preventDefault();;
      } else {
        return true;
      }
    }

  isFully(index, event) {
    if (event.target.value.length < event.target.maxLength) {
        event.target.style.borderColor = 'red'
    } else {
        event.target.style.borderColor = ''
        this.cards[index] = event.target.value
    }
    if (!this.cards.includes(null)) {
        this.card = this.cards.join(' ') 
    }
  }
  cvv(event) {
    if (event.target.value.length < event.target.maxLength) {
        event.target.style.borderColor = 'red'
    } else {
      event.target.style.borderColor = ''
      this.$emit('input', {
        ...this.value,
        cardCVV: event.target.value
      })
    }
  }
}
</script>
<style scoped lang="scss">
.card-info {
    &__payment {
      p {
        font-size: 12px;
        margin: 0;
        color: grey;
      }
      input {
        height: 30px;
        width: 50px;
        text-align: center;
        margin: 5px 5px 5px 0px;
      }
    }
    &__cvv {
    position: absolute;
    right: 0;
      p {
        font-size: 15px;
        margin: 0;
        color: grey;
      }
      input {
        height: 25px;
        width: 130px;
        text-align: center;
        margin: 5px 5px 5px 0px;
      }
    }
}
</style>