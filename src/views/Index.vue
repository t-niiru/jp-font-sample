<template>
  <div class="index">
    <InputText v-model="InputText"/>
    <Preview :text="InputText"/>
  </div>
</template>

<script>
import InputText from '@/components/InputText.vue'
import Preview from '@/components/Preview.vue'

export default {
  name: 'Index',
  components: {
    InputText,
    Preview
  },
  data () {
    return {
      InputText: ''
    }
  }
}
</script>
