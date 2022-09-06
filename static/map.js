function notavailyet(){
    alert ('This feature will be available soon. Stay tuned!')
}

function openinfo() {
  if (window.screen.width < 1000){
    document.getElementById("mySidenav").style.width = "100%";
  }
  else{
    document.getElementById("mySidenav").style.width = "40%";
  }
  }
  
function closeinfo() {
    document.getElementById("mySidenav").style.width = "0px";
  }
