var coders = [];
var codersFoto = ["Fiorella Quispe","Rosario Felix","Daguiana", "Jenny Velasquez", "Nadia Cuadros","Marilu Llamoca"];

for(var i = 1; i < 7; ++i){
  coders.push({nombre: "", foto:"img/"+i+".jpg"});
}

var contenedorGeneral=document.getElementById("contenedorGeneral");
var template = document.getElementById("template");

coders.forEach(function(element,index){     
  var tmp = template.childNodes[1].cloneNode(true);
  tmp.getElementsByClassName("foto")[0].setAttribute("src", element.foto);
  tmp.getElementsByClassName("name")[0].innerHTML = codersFoto[index];
  contenedorGeneral.append(tmp);
});

template.parentNode.removeChild(template);