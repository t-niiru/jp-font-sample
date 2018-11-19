<template>
  <div class="preview-area">
    <ul class="preview-list" :style="{ fontSize: FontSetting.FontSize + 'px', fontStyle: FontSetting.FontStyle, fontWeight: FontSetting.FontWeight }">
      <li class="preview-list-item">
        M PLUS 1p:<br>
        【<span class="m-plus-1p">{{ InputText }}</span>】
      </li>
      <li class="preview-list-item">
        さわらび明朝:<br>
        【<span class="sawarabi-mincho">{{ InputText }}</span>】
      </li>
      <li class="preview-list-item">
        M PLUS Rounded 1c:<br>
        【<span class="m-plus-rounded-1c">{{ InputText }}</span>】
      </li>
      <li class="preview-list-item">
        Kosugi Maru:<br>
        【<span class="kosugi-maru">{{ InputText }}</span>】
      </li>
      <li class="preview-list-item">
        Noto Serif JP:<br>
        【<span class="noto-serif-jp">{{ InputText }}</span>】
      </li>
      <li class="preview-list-item">
        さわらびゴシック:<br>
        【<span class="sawarabi-gothic">{{ InputText }}</span>】
      </li>
      <li class="preview-list-item">
        Kosugi:<br>
        【<span class="wf-Kosugi">{{ InputText }}</span>】
      </li>
      <li class="preview-list-item">
        はんなり明朝:<br>
        【<span class="wf-hannari">{{ InputText }}</span>】
      </li>
      <li class="preview-list-item">
        Noto Sans JP:<br>
        【<span class="wf-notosansjapanese">{{ InputText }}</span>】
      </li>
      <li class="preview-list-item">
        こころ明朝:<br>
        【<span class="wf-kokoro">{{ InputText }}</span>】
      </li>
      <li class="preview-list-item">
        ニコモジ:<br>
        【<span class="wf-nicomoji">{{ InputText }}</span>】
      </li>
      <li class="preview-list-item">
        ニクキュウ:<br>
        【<span class="wf-nikukyu">{{ InputText }}</span>】
      </li>
      <li class="preview-list-item">
        Default:<br>
        【<span class="default">{{ InputText }}</span>】
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Preview',
  data () {
    return {}
  },
  props: {
    InputText: String,
    FontSetting: {
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
.preview-area{
  max-width: 1000px;
  width: 100%;
  margin: auto;
}
.preview-list-item{
  margin: 0 0 1.5rem;
}
.m-plus-1p{
  font-family: 'M PLUS 1p', sans-serif;
}
.sawarabi-mincho{
  font-family: 'Sawarabi Mincho', sans-serif;
}
.sawarabi-gothic{
  font-family: 'Sawarabi Gothic', sans-serif;
}
.m-plus-rounded-1c{
  font-family: 'M PLUS Rounded 1c', sans-serif;
}
.kosugi-maru{
  font-family: 'Kosugi Maru', sans-serif;
}
.noto-serif-jp{
  font-family: 'Noto Serif JP', sans-serif;
}
.wf-Kosugi{
  font-family: 'Kosugi', sans-serif;
}
.wf-hannari {
  font-family: "Hannari", sans-serif;
}
.wf-kokoro {
  font-family: "Kokoro", sans-serif;
}
.wf-nicomoji {
  font-family: "Nico Moji", sans-serif;
}
.wf-nikukyu {
  font-family: "Nikukyu", sans-serif;
}
.wf-notosansjapanese {
  font-family: "Noto Sans JP", sans-serif;
}
.default{
  font-family: none;
}
</style>
