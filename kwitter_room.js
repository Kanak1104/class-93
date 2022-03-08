
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDu-EgjufkX2zr_w5-fEQvdSMzP5XpNXHg",
      authDomain: "kwitter-70687.firebaseapp.com",
      databaseURL: "https://kwitter-70687-default-rtdb.firebaseio.com",
      projectId: "kwitter-70687",
      storageBucket: "kwitter-70687.appspot.com",
      messagingSenderId: "350006722470",
      appId: "1:350006722470:web:9ecbc37d26256c0706d967"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
