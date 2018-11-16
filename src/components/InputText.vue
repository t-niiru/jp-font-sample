<template>
  <div class="input-text">
    <div class="input-area">
      <b-field label="font" :addons=false>
        <b-input v-model="InputText" placeholder="type text"></b-input>
      </b-field>
    </div>
    <div class="preview-area">
      <ul class="preview-list columns is-desktop is-multiline">
        <li class="column is-narrow">
          test1:<br>
          【<span class="m-plus-1p">{{ InputText }}</span>】
        </li>
        <li class="column is-narrow">
          test2:<br>
          【<span class="sawarabi-mincho">{{ InputText }}</span>】
        </li>
        <li class="column is-narrow">
          test3:<br>
          【<span class="m-plus-rounded-1c">{{ InputText }}</span>】
        </li>
        <li class="column is-narrow">
          test4:<br>
          【<span class="kosugi-maru">{{ InputText }}</span>】
        </li>
        <li class="column is-narrow">
          test5:<br>
          【<span class="noto-serif-jp">{{ InputText }}</span>】
        </li>
        <li class="column is-narrow">
          test6:<br>
          【<span class="sawarabi-gothic">{{ InputText }}</span>】
        </li>
        <li class="column is-narrow">
          test7:<br>
          【<span class="wf-Kosugi">{{ InputText }}</span>】
        </li>
        <li class="column is-narrow">
          test8:<br>
          【<span class="wf-hannari">{{ InputText }}</span>】
        </li>
        <li class="column is-narrow">
          test9:<br>
          【<span class="wf-notosansjapanese">{{ InputText }}</span>】
        </li>
        <li class="column is-narrow">
          test10:<br>
          【<span class="wf-kokoro">{{ InputText }}</span>】
        </li>
        <li class="column is-narrow">
          test11:<br>
          【<span class="wf-nicomoji">{{ InputText }}</span>】
        </li>
        <li class="column is-narrow">
          test12:<br>
          【<span class="wf-nikukyu">{{ InputText }}</span>】
        </li>
        <li class="column is-narrow">
          test13:<br>
          【<span class="">{{ InputText }}</span>】
        </li>
      </ul>
    </div>
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
  }
}
</script>

<style scoped lang="scss">
.preview-area{
  max-width: 1000px;
  width: 100%;
  margin: auto;
}
.column{
  width: 250px;
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

</style>
