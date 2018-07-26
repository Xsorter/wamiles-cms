(function(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCVsfE509a6mYgD_o9nsFxgDIzWq1viGQQ",
        authDomain: "wamiles-landing-training.firebaseapp.com",
        databaseURL: "https://wamiles-landing-training.firebaseio.com",
        projectId: "wamiles-landing-training",
        storageBucket: "wamiles-landing-training.appspot.com",
        messagingSenderId: "670150446875"
    };
    firebase.initializeApp(config);
    // Get a reference to the database service
    var database = firebase.database();
})()