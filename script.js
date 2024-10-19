let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let list = document.querySelector(".carousel .list");

nextBtn.addEventListener("click", () => slide("next"));
prevBtn.addEventListener("click", () => slide("prev"));

function slide(direction) {
  if (direction === "next") {
    list.appendChild(list.firstElementChild);
  } else {
    list.prepend(list.lastElementChild);
  }
}
