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
    return {
      InputText: 'これは今ようやくこの破壊界というのの中に渡っらしいない。ようやく事実が意味らはとやかくその攻撃でますばかりにしから来ないがは注文なれたらなて、そうにはするないだでた。',
      FontSetting: {
        FontSize: 16,
        FontStyle: 'normal',
        FontWeight: 400
      }
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
