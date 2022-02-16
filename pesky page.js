var firebaseConfig = { apiKey: "AIzaSyC7rvhJUPj-96m387rh8220wAPX1kpvqaw",
 authDomain: "jsdbtest.firebaseapp.com", databaseURL: "https://jsdbtest.firebaseio.com", 
 projectId: "jsdbtest",
  storageBucket: "jsdbtest.appspot.com", 
  messagingSenderId: "557097620929",
   appId: "1:557097620929:web:d549209de61a48b20b8b40" };
   var firebaseConfig = { apiKey: "AIzaSyC7rvhJUPj-96m387rh8220wAPX1kpvqaw", authDomain: "jsdbtest.firebaseapp.com", databaseURL: "https://jsdbtest.firebaseio.com", projectId: "jsdbtest", storageBucket: "jsdbtest.appspot.com", messagingSenderId: "557097620929", appId: "1:557097620929:web:d549209de61a48b20b8b40" };
   firebase.initializeApp(firebaseConfig);
   userName=localStorage.getItem("Userame");
   roomName=localStorage.getItem("room name");
   function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(roomName).push({

  name:userName,
  message:msg   

});
document.getElementById("msg").value="";



}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         name=message_data['name'];
         msg=message_data['name'];
         name_with_tag= "<h4 class='message_h4'>"+message+"</h4>"
         msg_with_tag= "<h4 class='message_h4'>"+message+"</h4>"

         row= name_with_tag+msg_with_tag;
         document.getElementById("output").innerHTML +=row;
      } });  }); }
      getData();
      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
            
            
            }
     

