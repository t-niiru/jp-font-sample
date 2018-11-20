<template>
  <div class="setting-contents box">
    <div>
      <b-field label="font-style">
        <b-select @input="submit" v-model="FontSetting.FontStyle">
          <option value="normal" selected>normal</option>
          <option value="italic">italic</option>
        </b-select>
      </b-field>
      <b-field label="font-weight">
        <b-select @input="submit" v-model="FontSetting.FontWeight">
          <option value="100">100</option>
          <option value="300">300</option>
          <option value="400" selected>400</option>
          <option value="500">500</option>
          <option value="700">700</option>
          <option value="900">900</option>
        </b-select>
      </b-field>
      <b-field label="font-size" :addons=false>
        <b-input
          type="number"
          min="10"
          max="100"
          @input="submit"
          v-model="FontSetting.FontSize"
          placeholder="type num"></b-input>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Setting',
  data () {
    return {
      FontSetting: {
        FontSize: 16,
        FontStyle: 'normal',
        FontWeight: 400
      }
    }
  },
  methods: {
    submit () {
      this.$emit('input',
        this.FontSetting
      )
    }
  }
}
</script>

<style scoped lang="scss">

</style>
