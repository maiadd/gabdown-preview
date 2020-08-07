let codeElement;
let contentElement;
let fullscreenButton;
let downloadLink;

function handleInput() {
  downloadLink.href = getDataUrl(codeElement.value);
  gabify(contentElement, codeElement.value);
}

function handleFullscreenButton() {
  document.body.classList.toggle("fullscreen");
}

function getDataUrl(s) {
  let encodedData = window.btoa(s);
  let dataUrl = `data:text/plain;base64,${encodedData}`;
  return dataUrl;
}

window.onload = () => {
  codeElement = document.getElementById("code");
  codeElement.addEventListener("input", handleInput);
  contentElement = document.getElementById("content");
  contentElement.innerHTML = "hello";
  downloadLink = document.getElementById("download-link");
  fullscreenButton = document.getElementById("fullscreen-button");
  fullscreenButton.addEventListener("click", handleFullscreenButton);
  fetch("index.gd")
    .then(response => response.text())
    .then(text => {
      codeElement.value = text;
      handleInput();
    });

}
