import Vue from 'vue'
import App from './App'

/* 导入路由配置 */
import router from './router'

/* 导入ElementUI */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


/* 使用路由及elmentUI */
Vue.use(router);
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});