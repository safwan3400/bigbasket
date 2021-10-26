function myFunction() {
    var x = document.getElementById("myTopnav");
    var body = document.getElementsByTagName("body")[0];
    var topnav1 = document.getElementById("topnav1");
    if (x.className === "topnav") {
        x.className += " responsive";
        body.className = "over-flow-hidden";
        setTimeout(function(){
            topnav1.className = "topnav1";
       }, 300);
    } else {
        x.className = "topnav";
        body.className = "";
        topnav1.className = "";

    }
}
document.addEventListener("click", (evt) => {
    var x = document.getElementById("myTopnav");
    let targetElement = evt.target;
    var a = document.getElementById("mynav");
    var body = document.getElementsByTagName("body")[0];

    if (targetElement != x && targetElement != a && targetElement.className.split(" ")[0] != "menuelements") {
        x.className = "topnav";
        body.className = "";
        topnav1.className = "";

    }else if (targetElement === a){
        myFunction();
    }
    
        // evt.stopPropagation();
    

});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    document.getElementById("footbar").style.bottom = "0";
  } else {
    document.getElementById("header").style.top = "-8.4rem";
    document.getElementById("footbar").style.bottom = "-3.5rem";
  }
  prevScrollpos = currentScrollPos;
}

