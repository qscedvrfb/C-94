
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyB-ISamXiE_IKpmAeMO8LsWvkghinNV_1A",
      authDomain: "classtest-47a3d.firebaseapp.com",
      projectId: "classtest-47a3d",
      storageBucket: "classtest-47a3d.appspot.com",
      messagingSenderId: "738432447357",
      appId: "1:738432447357:web:98530f521ece888e7f9214"
    };
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
