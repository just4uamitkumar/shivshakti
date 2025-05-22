const myText = document.getElementById('myText');

function showMessage(event) {
     const myVal = event.target.value;
      console.log(myVal)
      myText.innerHTML = myVal
}
let typingTimer;

function myFunction(event){
  clearTimeout(typingTimer);
  typingTimer = setTimeout(function() {
      showMessage(event)
      }, 5000);
  
}

<input type="text" id="myInput" value='' onkeyup="myFunction(event)"/>
<div id="myText">Amit</div>