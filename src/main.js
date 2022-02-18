/*
 * @Author: your name
 * @Date: 2022-02-14 11:24:53
 * @LastEditTime: 2022-02-14 13:26:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yyac-system/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import '@/styles/index.less';
import store from "@/store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import router from "@/permission";
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
