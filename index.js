/*console.log("Javier");
window.alert("javi peres va a por ti");

document.getElementById("idLorem").textContent ="ALA";*/

let username;

/*username = window.prompt("Como te llamas?");
document.getElementById("espacio_nombre").textContent = username;*/

document.getElementById("boton_username").onclick =  function(){
    username = document.getElementById("username").value;
    document.getElementById("titulo").textContent = document.getElementById("titulo").textContent + " y " + username;
    document.getElementById("espacio_nombre").textContent = username;
}