import { createApp } from 'vue';

import App from './App.vue';
import store from './store';
import router from './router';

import CardItem from './components/CardItem';
import CardHeart from './components/CardHeart.vue';
import BaseTag from './components/BaseTag';
import BaseWrapper from './components/BaseWrapper';


const app = createApp(App);
app.component('card-item', CardItem);
app.component('card-heart', CardHeart);
app.component('base-tag', BaseTag);
app.component('base-wrap', BaseWrapper);


app.use(store);
app.use(router);
app.mount('#app');


