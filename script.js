let codeElement;
let contentElement;
let fullscreenButton;

function handleInput() {
  gabify(contentElement, codeElement.value);
}

function handleFullscreenButton() {
  document.body.classList.toggle("fullscreen");
}

window.onload = () => {
  console.log("hello world");
  codeElement = document.getElementById("code");
  contentElement = document.getElementById("content");
  contentElement.innerHTML = "hello";
  codeElement.addEventListener("input", handleInput);
  fullscreenButton = document.getElementById("fullscreen-button");
  fullscreenButton.addEventListener("click", handleFullscreenButton);
  fetch("index.gd")
    .then(response => response.text())
    .then(text => {
      codeElement.value = text;
      handleInput();
    });
}
