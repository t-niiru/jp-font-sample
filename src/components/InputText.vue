<template>
  <div class="input-area">
    <b-field label="font" :addons=false>
      <b-input @input="submit" v-model="InputText" placeholder="type text"></b-input>
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'InputText',
  data () {
    return {
      InputText: '',
      font: {
        size: 2,
        weight: 'normal'
      }
    }
  },
  methods: {
    submit (e) {
      this.$emit('input', this.InputText)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
