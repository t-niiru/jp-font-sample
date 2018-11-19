<template>
  <div class="index">
    <InputText v-model="InputText"/>
    <FontSetting v-model="FontSetting"/>
    <Preview :input-text="InputText" :font-setting="FontSetting"/>
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
      InputText: '',
      FontSetting: {
        FontSize: 16,
        FontStyle: 'normal',
        FontWeight: 400
      }
    }
  }
}
</script>
