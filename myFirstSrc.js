alert("My first MAJIC");

console.log("my first log");
console.log(document);
console.log(document.getElementById("myFirstForm"));
console.log(document.getElementsByClassName(".special"));
console.log(document.getElementsByTagName("label"));
console.log(document.querySelector(".special"));



var form = document.getElementById("myFirstForm");
var submitButton = document.getElementById("go");

submitButton.addEventListener("click", doWhatIWant);

function doWhatIWant(event){
  console.log("this is my THIS: ");
  console.log(this);
  console.log("this is my EVENT: ");
  console.log(event);
  console.log("this is my FORM: ");
  console.log(form);
  console.log("this is my FORM ELEMENTS: ");
  console.log(form.elements[1].value);
  var myValue = form.elements[1].value;
  for(var i = 0;  i < form.elements.length;i++){
    alert(form.elements[i].name);
  }
}