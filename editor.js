// copyright (c) amsilla.com
function amsillahighlight(syntaxElement, textarea, callback){
  var selectStart = textarea.selectionStart;
  var selectEnd = textarea.selectionEnd;
  syntaxElement.innerHTML = callback(textarea.value.replaceAll("&","&#38;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll("\n","<br>").replaceAll(" ","&nbsp;"));;
  textarea.style.height = "auto";
  textarea.style.height = (textarea.scrollHeight) + "px";
  textarea.selectionStart = selectStart;
  textarea.selectionEnd = selectEnd;
}
function highlight(syntaxElement, textarea, callback){
  textarea.classList.add('ams-write')
  syntaxElement.classList.add("ams-syntax")
  amsillahighlight(syntaxElement, textarea, callback)
  textarea.addEventListener("input", ()=>amsillahighlight(syntaxElement, textarea, callback));
}
