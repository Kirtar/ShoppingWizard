var progress = document.getElementById("progress");
var next = document.getElementById("next");
var circles = document.querySelectorAll(".circle");
let progressStage = 0;
let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) currentActive = circles.length;
  if (currentActive !== 4 || progressStage == 1) {
    update();
  } else if (currentActive == 4){
    progressStage++;
  }
});

const update = () => {
  circles.forEach((circle, index) => {
    if (index < currentActive) circle.classList.add("active");
    else circle.classList.remove("active");
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
};
