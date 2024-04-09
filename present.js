const blockCover = document.querySelector(".blockCover");
const fireWork1 = document.querySelector(".firework1");
const fireWork2 = document.querySelector(".firework2");
const audio = document.querySelector("#myAudio");
const inside = document.querySelector(".blockInside");
const h1 = document.querySelector(".h1")
const heart = "<3";

blockCover.addEventListener("click", event => {
  audio.play();
  inside.style.display = "block";
  blockCover.classList.add("move");
  h1.innerHTML = `I LOVE YOU ARTEM ${heart} HAPPY BIRTHDAY BRO`
  setTimeout(() => {
    blockCover.style.display = "none";
    fireWork1.style.display = "block";
    fireWork2.style.display = "block";
  }, 2000);

})