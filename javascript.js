window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function showing(i) {
  var x = document.getElementById("Demo"+i);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function hiding(j) {

  var i;
	for (i = 1; i <= 4; i++){
	var x = document.getElementById("Demo"+i);
	if(i!=j){
	x.className = x.className.replace(" w3-show", "");}
  }
}
