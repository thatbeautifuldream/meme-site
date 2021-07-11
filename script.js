function loadMemes() {
  fetch("https://meme-api.herokuapp.com/gimme")
    .then((res) => res.json())
    .then((data) => (document.getElementById("meme").src = data.preview[2]));
}

let btnDownload = document.getElementById("save-btn");
let img = document.getElementById("meme");

btnDownload.addEventListener("click", () => {
  let imagePath = img.getAttribute("src");
  let fileName = getFileName(imagePath);
  saveAs(imagePath, fileName);
});
// Dummy URL : https://preview.redd.it/xmtny5krcea71.jpg?width=320&crop=smart&auto=webp&s=20875448c6d34a1985f78f0602a2d32450ab0b9f
function getFileName(str) {
  return str.substring(str.lastIndexOf("/") + 1, str.lastIndexOf("?"));
}
