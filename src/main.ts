import {createApp} from 'vue'
import { inject } from '@vercel/analytics';
import 'virtual:uno.css'
import 'virtual:svg-icons-register'

import router from '@/router'
import pinia from '@/store'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import '@unocss/reset/tailwind-compat.css'
import '@/utils/request';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import {createCore} from '@/views/Editor/core'
import { myPlugin } from '@/views/testPlugin'

import App from './App.vue'
import IconFontPlugin from './plugins/iconFontPlugin';
import './style.less'
import './mock';

// Vercel Analytics
inject();
const core = createCore()
core.use(myPlugin)
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(ArcoVue);
app.use(core)
app.use(ArcoVueIcon);
app.use(IconFontPlugin);
app.mount('#app')
