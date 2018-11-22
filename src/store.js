import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    InputText: 'これは今ようやくこの破壊界というのの中に渡っらしいない。ようやく事実が意味らはとやかくその攻撃でますばかりにしから来ないがは注文なれたらなて、そうにはするないだでた。',
    FontSetting: {
      FontSize: 16,
      FontStyle: 'normal',
      FontWeight: 400
    }
  },
  mutations: {
    setInputText (state, val) {
      state.InputText = val
    },
    setFontSetting (state, val) {
      state.FontSetting = val
    }
  },
  actions: {

  }
})
