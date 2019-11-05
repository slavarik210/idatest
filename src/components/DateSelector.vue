<template>
    <div class="dateCard"> 
        <p>Срок действия</p>
        <select class="dateCard-select" v-model="selectYear" placehoder="Год">
            <option v-for="year in years">{{year}}</option>
        </select>
        <select class="dateCard-select" v-model="selectMonth" placehoder="Месяц">
            <option v-for="month in months">{{month}}</option>
        </select>
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
export default class DateSelector extends Vue {
    get selectYear () {
        return this.value.cardYear
    }
    set selectYear (val) {
        this.$emit('input', {
            ...this.value, 
            cardYear: val
        })
    }
    get selectMonth () {
        return this.value.cardMonth
    }
    set selectMonth (val) {
        this.$emit('input', {
            ...this.value, 
            cardMonth: val
        })
    }
    months = ['1','2','3','4','5','6','7','8','9','10','11','12']
    years = ['2019','2020','2021','2023','2024']

}
</script>
<style scoped lang="scss">
.dateCard {
    margin: 5px 5px 5px 0px;
    p {
        font-size: 12px;
        margin: 5px 5px 5px 0px;
        color: grey;
    }
    &-select {
        select {
            margin: 5px;  
            height: 50px;
            width: 50px;
                option {
                    padding: 10px;
                }
        }
    }
}
</style>