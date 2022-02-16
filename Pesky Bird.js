var firebaseConfig = { apiKey: "AIzaSyDaCONVl7DnOLpYL6GBCROBGK1JVrjzuzM",
authDomain: "social-website-6ec27.firebaseapp.com",
 databaseURL: "https://social-website-6ec27-default-rtdb.firebaseio.com",
 projectId: "social-website-6ec27",
  storageBucket: "social-website-6ec27.appspot.com", 
 messagingSenderId: "720345163374", 
 appId: "1:720345163374:web:7e0ae21e81e8b385c3687f",
  measurementId: "G-P7KCPNRMBY" };
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("Username");
document.getElementById("Starlight").innerHTML="Welcome "+ user_name+ " To pesky bird have fun"
var userName=localStorage.getItem()
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
  console.log("room name"+ Room_names );
  row= "<div class='room_name' id="+Room_names+" onclick='redirectToThisRoomName(this.id) '>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML +=row;
      
      });});}
getData();

function addRoom()
{
 Room_name=document.getElementById("js").value;

firebase.database().ref("/").child(Room_name).update({
purpose : "adding room name"
});
localStorage.setItem("room name", Room_name);
window.location="pesky page.html";


}
function redirectToThisRoomName(name);{
console.log(name);
localStorage.setItem("room_name", Room_name);
window.location="pesky page.html";


}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";


}




