function loadMemes() {
  fetch("https://meme-api.herokuapp.com/gimme")
    .then((res) => res.json())
    .then((data) => (document.getElementById("meme").src = data.preview[2]));
}
