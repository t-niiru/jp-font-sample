<template>
  <div class="index">
    <InputText v-model="InputText"/>
    <div class="columns">
      <div class="column is-narrow">
        <FontSetting v-model="FontSetting"/>
      </div>
      <div class="column">
        <Preview :input-text="InputText" :font-setting="FontSetting"/>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from '@/components/InputText.vue'
import FontSetting from '@/components/FontSetting.vue'
import Preview from '@/components/Preview.vue'

export default {
  name: 'Index',
  components: {
    InputText,
    FontSetting,
    Preview
  },
  data () {
    return {}
  },
  computed: {
    InputText () {
      return this.$store.state.InputText
    },
    FontSetting () {
      return this.$store.state.FontSetting
    }
  }
}
</script>

<style lang="scss" scoped>
.index{
  width: 100%;
  max-width: 1000px;
  margin: auto;
}
.columns{
  margin: 0;
}
</style>
