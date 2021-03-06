import { createApp } from 'vue';

import App from './App.vue';
import store from './store/index.js';
import BaseToggle from './components/base/BaseToggle.vue';
import BaseButton from './components/base/BaseButton.vue';

const app = createApp(App)

app.component('base-toggle', BaseToggle);
app.component('base-button', BaseButton);
app.use(store);

app.mount('#app')