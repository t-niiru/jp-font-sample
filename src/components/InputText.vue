<template>
  <div class="input-area">
    <b-field :addons=false>
      <b-input class="text-input" @input="submit" v-model="InputText" placeholder="type text"></b-input>
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'InputText',
  data () {
    return {
      InputText: ''
    }
  },
  methods: {
    submit () {
      this.$store.commit('setInputText', this.InputText)
    }
  }
}
</script>

<style scoped lang="scss">
.input-area{
  position: sticky;
  top: 2rem;
  margin: 0 0 02rem;
  background-color: #fff;
  z-index: 1;
}
.text-input /deep/{
  height: 4rem;
  input{
    height: 100%;
    padding: 10px;
  }
}
@media only screen and (min-width: 601px){
  .input-area{
    top: 3rem;
    margin: 2rem 0;
  }
}
</style>
