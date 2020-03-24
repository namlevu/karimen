function showFurigana(htmlElement) {
  var isShown = htmlElement.dataset.show;
  var elements = document.getElementsByTagName("rt");

  if(isShown){
    for(i = 0 ; i < elements.length; i++) {
      elements[i].style.display = "none";
      htmlElement.dataset.show = "false";
    }
  }
  else
  {
    for(i = 0 ; i < elements.length; i++) {
      elements[i].style.display = "block";
    }
    htmlElement.dataset.show = "true";
  }
}
