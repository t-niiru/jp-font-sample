<template>
  <div class="setting-area">
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
        max="50"
        @input="submit"
        v-model="FontSetting.FontSize"
        placeholder="type num"></b-input>
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'Setting',
  data () {
    return {}
  },
  computed: {
    FontSetting () {
      return this.$store.state.FontSetting
    }
  },
  methods: {
    submit () {
      this.$store.commit('setFontSetting', this.FontSetting)
    }
  }
}
</script>

<style scoped lang="scss">
.setting-area{
  width: 125px;
  position: sticky;
  top: 11rem;
  background-color: #fff;
  .field{
    .label{
      font-size: 1.6rem;
    }
    .control{
      margin: 0 0 0 10px;
    }
  }
}
</style>
