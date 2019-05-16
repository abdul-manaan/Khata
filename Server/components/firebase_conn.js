const firebase = require('firebase');
const fb_store =  require('firebase/storage');
//const

var config = {
    apiKey: "AIzaSyCdJblpchZ5VZfV9CdzF72PlH5Myl29RUs",
    authDomain: "khata-86adb.firebaseapp.com",
    databaseURL: "https://khata-86adb.firebaseio.com",
    projectId: "khata-86adb",
    storageBucket: "khata-86adb.appspot.com",
    messagingSenderId: "650485678792"
};

firebase.initializeApp(config);
let database = firebase.database();
let storage = firebase.storage();


module.exports = {
    db: database,
    auth: firebase.auth(),
    stor: storage,
};
