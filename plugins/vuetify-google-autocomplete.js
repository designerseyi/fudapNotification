import Vue from 'vue';
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete';
 
Vue.use(VuetifyGoogleAutocomplete, {
  apiKey: 'AIzaSyC_COSqve9tmrGUfpYIrViw_Vho0p3Zmos', // Can also be an object. E.g, for Google Maps Premium API, pass `{ client: <YOUR-CLIENT-ID> }`
  version: '3.40', // Optional
  language: 'english', // Optional
});