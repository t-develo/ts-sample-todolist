import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import PrimeVue from 'primevue/config';
app.use(PrimeVue);

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
app.component('DataTable', DataTable);
app.component('Column', Column);
app.mount('#app');
