var syntaxElement = document.getElementById("syntax");
var textarea = document.getElementById("write");
function convert(inputText) {
  return amsillaEditorProcess(inputText.replaceAll("&","&#38;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll("\n","<br>").replaceAll(" ","&nbsp;"));
}
function highlight(){
  var selectStart = textarea.selectionStart;
  var selectEnd = textarea.selectionEnd;
  syntaxElement.innerHTML = convert(textarea.value);
  textarea.style.height = "auto";
  textarea.style.height = (textarea.scrollHeight) + "px";
  textarea.selectionStart = selectStart;
  textarea.selectionEnd = selectEnd;
}
textarea.addEventListener("input", highlight);
highlight();
