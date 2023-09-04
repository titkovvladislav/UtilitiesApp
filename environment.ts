// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // authUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBzq0tbsgeH-pFzyEHbVKPiUBbR0FlLLjc',
  // regUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBzq0tbsgeH-pFzyEHbVKPiUBbR0FlLLjc',
  authUrl: 'http://localhost:8000/auth/login',
  regUrl: 'http://localhost:8000/auth/registration',
  firebase: {
    apiKey: "AIzaSyBzq0tbsgeH-pFzyEHbVKPiUBbR0FlLLjc",
    authDomain: "teaeq1221.firebaseapp.com",
    projectId: "teaeq1221",
    storageBucket: "teaeq1221.appspot.com",
    messagingSenderId: "422151486889",
    appId: "1:422151486889:web:1cfb6dd762b7f25375d8b8",
    measurementId: "G-H6N2S7CQ1K"
  },
  weather: {
    apiKey: "56c94210-ed13-489b-8e09-6e860e0ba55b",
    //url: 'https://api.weather.yandex.ru/v2/forecast?lat=47.422052&lon=40.093723&lang=ru_RU'
    url: 'http://localhost:8000/weather/getweather'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
