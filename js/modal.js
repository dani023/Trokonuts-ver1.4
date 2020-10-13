// Get the modal
var modal ;

// Get the button that opens the modal
//var btn = document.getElementById("modal1");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
//btn.onclick = function() {
 //   modal.style.display = "block";
//}

// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
  //modal.style.display = "none";
//}

// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
 // if (event.target == modal) {
  //  modal.style.display = "none";
 // }
//}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
function createModal(id){
  //let modal="";
  console.log(id);
  modal = document.getElementById("content-"+id);
  console.log((id.replace(/\D/g,'')));
  var span =  document.getElementById("close"+((id.replace(/\D/g,''))));
  console.log(span);

  modal.style.display = "block";
  span.onclick = function() {
      modal.style.display = "none";
    }
  console.log("llega bien");
  //parentDiv.appendChild(modal);
}