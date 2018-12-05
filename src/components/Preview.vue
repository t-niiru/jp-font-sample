<template>
  <div class="preview-area">
    <ul class="preview-list">
      <li class="preview-list-item" v-for="FontFormat in FontFormats" :key="FontFormat.id">
        <div class="font-title">
          <a :href="FontFormat.url" title="FontFormat.name" target="_blank" rel="noopener">
            <b-icon icon="open-in-new"></b-icon>
          </a>
          {{ FontFormat.name }}
        </div>
        <div class="font-text" :class="FontFormat.class"
          :style="{
            fontSize: FontSetting.FontSize + 'px',
            fontStyle: FontSetting.FontStyle,
            fontWeight: FontSetting.FontWeight,
            fontFamily: FontFormat.family }">
              {{ InputText }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Preview',
  data () {
    return {
      FontFormats: [
        {
          name: 'bwserデフォルト',
          class: 'default',
          url: 'http://rinrin.saiin.net/~aor/fonts/defaultfonts',
          family: 'none'
        },
        {
          name: 'Noto Serif JP',
          class: 'wf-noto-serif-jp',
          url: 'https://fonts.google.com/specimen/Noto+Serif+JP',
          family: 'Noto Serif JP'
        },
        {
          name: 'Noto Sans JP',
          class: 'wf-noto-sans-jp',
          url: 'https://fonts.google.com/specimen/Noto+Sans+JP',
          family: 'Noto Sans JP'
        },
        {
          name: 'Noto Sans SC',
          class: 'wf-noto-sans-sc',
          url: 'https://fonts.google.com/specimen/Noto+Sans+SC',
          family: 'Noto Sans SC'
        },
        {
          name: 'Noto Sans TC',
          class: 'wf-noto-sans-tc',
          url: 'https://fonts.google.com/specimen/Noto+Sans+TC',
          family: 'Noto Sans SC'
        },
        {
          name: 'M PLUS 1p',
          class: 'm-plus-1p',
          url: 'https://fonts.google.com/specimen/M+PLUS+1p',
          family: 'M PLUS 1p'
        },
        {
          name: 'M PLUS Rounded 1c',
          class: 'm-plus-rounded-1c',
          url: 'https://fonts.google.com/specimen/M+PLUS+Rounded+1c',
          family: 'M PLUS Rounded 1c'
        },
        {
          name: 'さわらび明朝',
          class: 'awarabi-mincho',
          url: 'https://fonts.google.com/specimen/Sawarabi+Mincho',
          family: 'Sawarabi Mincho'
        },
        {
          name: 'さわらびゴシック',
          class: 'sawarabi-gothic',
          url: 'https://fonts.google.com/specimen/Sawarabi+Gothic',
          family: 'Sawarabi Gothic'
        },
        {
          name: 'Kosugi',
          class: 'wf-Kosugi',
          url: 'https://fonts.google.com/specimen/Kosugi',
          family: 'Kosugi'
        },
        {
          name: 'Kosugi Maru',
          class: 'kosugi-maru',
          url: 'https://fonts.google.com/specimen/Kosugi+Maru',
          family: 'Kosugi Maru'
        },
        {
          name: 'はんなり明朝',
          class: 'wf-hannari',
          url: 'https://googlefonts.github.io/japanese/#hannari',
          family: 'Hannari'
        },
        {
          name: 'こころ明朝',
          class: 'wf-kokoro',
          url: 'https://googlefonts.github.io/japanese/#kokoro',
          family: 'Kokoro'
        },
        {
          name: 'ニコモジ',
          class: 'wf-nicomoji',
          url: 'https://googlefonts.github.io/japanese/#nicomoji',
          family: 'Nico Moji'
        },
        {
          name: 'ニクキュウ',
          class: 'wf-nikukyu',
          url: 'https://googlefonts.github.io/japanese/#nikukyu',
          family: 'Nikukyu'
        }
      ]
    }
  },
  computed: {
    ...mapState(['InputText', 'FontSetting'])
  }
}
</script>

<style scoped lang="scss">
.preview-area{
  padding: 1rem;
}
.preview-list-item{
  margin: 0 0 1.5rem;
  padding: 0 0 1.5rem;
  border-bottom: 1px solid #313131;
}
.font-title{
  margin: 0 0 1rem;
}
.font-text{
  margin: 0 1rem;
}
.icon{
  background-color: #313131;
  color: #fff;
  border-radius: 50%;
  padding: 0;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  display: inline-block;
  letter-spacing: 0;
}
</style>
