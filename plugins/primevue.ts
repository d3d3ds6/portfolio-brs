import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import { defineNuxtPlugin } from '#app';
import Timeline from 'primevue/timeline';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(PrimeVue); // Register PrimeVue
  nuxtApp.vueApp.component('Timeline', Timeline); // Register PrimeVue component
});
