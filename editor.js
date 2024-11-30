// copyright (c) amsilla.com
function highlight(syntaxElement, textarea, callback){
  textarea.addEventListener("input", highlight);
  var selectStart = textarea.selectionStart;
  var selectEnd = textarea.selectionEnd;
  syntaxElement.innerHTML = callback(textarea.value.replaceAll("&","&#38;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll("\n","<br>").replaceAll(" ","&nbsp;"));;
  textarea.style.height = "auto";
  textarea.style.height = (textarea.scrollHeight) + "px";
  textarea.selectionStart = selectStart;
  textarea.selectionEnd = selectEnd;
}
