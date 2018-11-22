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
  top: 3rem;
  background-color: #fff;
  margin: 3rem 0;
}
.text-input /deep/{
  height: 4rem;
  input{
    height: 100%;
    padding: 10px;
  }
}
</style>
