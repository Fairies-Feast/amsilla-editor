function convert(inputText) {
  return inputText;
}
var syntaxElement = document.getElementById("syntax");
var textarea = document.getElementById("write");
function highlight(){
  syntaxElement.innerHTML = convert(textarea.value);
  textarea.style.height = "auto";
  textarea.style.height = (textarea.scrollHeight) + "px";
}
textarea.addEventListener("input", highlight);
highlight();
