const firebaseConfig = {
    apiKey: "AIzaSyBz9bDsSVudzIjiRYAWRYApcaalk-sta0k",
    authDomain: "shopeasy-74440.firebaseapp.com",
    projectId: "shopeasy-74440",
    storageBucket: "shopeasy-74440.appspot.com",
    messagingSenderId: "411680149020",
    appId: "1:411680149020:web:0fada55f814d4f7dba99d9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage().ref();
