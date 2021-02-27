function showProperties(element){
  document.getElementById('message').innerHTML = element.alt;
onmouseover = "showProperties(this)" onmouseleave = "document.getElementById('message').innerHTML='Hover over an image';
}