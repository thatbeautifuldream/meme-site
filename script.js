function loadMemes() {
  fetch("https://meme-api.herokuapp.com/gimme")
    .then((res) => res.json())
    .then((data) => (document.getElementById("meme").src = data.preview[2]));
}

let btnDownload = document.getElementById("save-btn");
let img = document.getElementById("meme");

btnDownload.addEventListener("click", () => {
  let imagePath = img.getAttribute("src");
  let fileName = "meme";
  saveAs(imagePath, fileName);
});

function getFileName(str) {
  return str.substring(str.lastIndexOf("/") + 1);
}
