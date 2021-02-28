// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDRVBMWKf2NsgAtI4EtBSwDaj0M1AEmz-Y",
    authDomain: "mittalcatering-fa504.firebaseapp.com",
    databaseURL: "https://mittalcatering-fa504.firebaseio.com",
    projectId: "mittalcatering-fa504",
    storageBucket: "mittalcatering-fa504.appspot.com",
    messagingSenderId: "774693248268",
    appId: "1:774693248268:web:14c7c70bde1c06e4ad7d29",
    measurementId: "G-5PMKVVPB7B"
  },
  onesignal: {
    appId: '806c3313-1ebe-49bd-80dd-bd049a90c400',
    googleProjectNumber: '774693248268',
    restKey: 'MzZlYTRiMTctMmIzMi00NDI3LTljZjQtNWZmNWFmZTc5MGI0'
  },
  stripe: {
    sk: 'pk_live_51HpVByIQtLSgv1tB6tq9f8BbSl1LmwEgl3OKZhus9agt4h3UMlwg4gpdaZZeZpzXmz5kWgaoysn7o5LzlcnDamlh00kuDImC3s'
  },
  paypal: {
    sandbox: '',
    production: 'YOUR_PRODUCTION_CLIENT_ID'
  },
  general: {
    symbol: '£',
    code: 'GBP'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
