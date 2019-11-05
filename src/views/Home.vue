<template>
  <div class="pay-window">
    <div class="pay-window__target">
          <p> Информация по оплате </p>
          <div> 
            Номер счета :
            <input 
              type="text"
              v-model="payTarget.pay"
              @keypress="isNumber($event)">
          </div>
          <div> 
            Сумма платежа :
            <input 
              type="text"
              v-model="payTarget.money"
              @keypress="isNumber($event)"
            >
            руб.
          </div>
        </div>
    <form name="myform" @submit="checkForm" >
      <p>Данные банковской карты</p>
      <div class="pay-window__card">
        <card-input v-model="cardHolder" />
        <date-selector v-model="cardHolder" />
        <div class="pay-window__card-cvv">
          <input 
            type="text" 
            @blur="isFully($event)"
            @keypress="onlyEng($event)"
            minlength="4"
            placeholder="Держатель карты"
            v-touppercase
          >
        </div>
      </div>
      <input class="pay-window__submit" type="submit" value="Оплатить">
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import CardInput from '@/components/CardInput.vue'
import DateSelector from '@/components/DateSelector.vue'

@Component({
  components : {
    CardInput,
    DateSelector
  }
})
export default class Home extends Vue {
  cardHolder = {
    card: '',
    name: '',
    cardYear: '',
    cardMonth: '',
    cardCVV: ''
  }
  payTarget = {
    pay: '',
    money: ''
  }
  
  get holderName () {
    return this.cardHolder.name
  }
  set holderName (val) {
    val = val.toUpperCase()
    this.cardHolder.name = val
  }
  
  isFully(event) {
    if (event.target.value.length < event.target.minLength) {
        event.target.style.borderColor = 'red'
    } else {
        event.target.style.borderColor = ''
        this.holderName = event.target.value
    }
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
  onlyEng(event) {
    let regex = new RegExp("^[a-zA-Z ]+$");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
      event.preventDefault();
      return false;
    }
  }
  checkForm (event) {
    let missingInputs = []
    for (let key in this.cardHolder) {
      if(this.cardHolder[key] === '') {
        missingInputs.push(key)
      }
    }
    for (let key in this.payTarget) {
      if(this.payTarget[key] === '') {
        missingInputs.push(key)
      }
    }
    if (missingInputs.length > 0) {
      event.preventDefault()
      alert('Пропущено ' + missingInputs)
    } else {
      this.$router.push({name:'payment', params: {holderInfo: this.cardHolder, payment: this.payTarget }})
    }
  }
}
</script>
<style scoped lang="scss">
.pay-window {
  position: absolute;
  left: 30%;
  background-color: #f8f8ff;
  padding: 10px;
  p {
    font-weight: bold;
  }
  &__card {
    width: 500px;
    position:relative;
    &-cvv {
      input {
        height: 30px;
        width: 240px;
        margin: 5px 5px 5px 0px;
      }
    }
  }
  &__submit {
    margin-top: 20px;
    width: 100px;
    height: 30px;
    background-color: rgb(25, 0, 255);
    border-radius: 15px;
    color: white;
  }
  &__target {
    width: 50%;
    font-size: 12px;
    div {
      margin: 5px 5px 5px 0;
      input {
          width: 100px;
          margin-left: 10px;
      }
    }
  }
}

</style>