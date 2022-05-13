




const main = document.getElementById("main");




















main.addEventListener("click",function(event){
  console.log(event);
  
  if(this.className.indexOf(" gone ") > -1 ){
    this.className = this.className.replace(" gone ", "");
    alert("Je me sems super!... " + event.y);
  }
  else{
    alert("Aïe!! " + event.x);
    this.className = this.className + " gone ";
  }
});