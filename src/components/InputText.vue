<template>
  <div class="input-area">
    <b-field label="テキスト" :addons=false>
      <b-input @input="submit" v-model="InputText" placeholder="type text"></b-input>
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
    submit (e) {
      this.$emit('input', this.InputText)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
