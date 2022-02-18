/*
 * @Author: your name
 * @Date: 2022-02-14 11:54:23
 * @LastEditTime: 2022-02-14 11:54:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yyac-system/src/store/index.js
 */
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import state from "./state";
 const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})
export default store