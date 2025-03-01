
let time = document.querySelector(".time");

const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const btns = document.querySelector(".buttons");

let ms = 0;
let min = 0;
let sec = 0;
let watch = null;

function updateDisplay() {
  let formattedTime = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}:${String(ms).padStart(2, "0")}
    `;
    time.textContent= formattedTime;
}
updateDisplay()

btns.addEventListener("click", (event) => {

  if (event.target.textContent == "Start") {
    if(!watch){
    watch = setInterval(() => {
      ms++;
      time.textContent = `${min}:${sec}:${ms}`;
      if (ms == 100) {
        ms = 0;
        sec++;
        time.textContent = `${min}:${sec}:${ms}`;
      }
      if (sec == 60) {
        sec = 0;
        min++;
      }
      updateDisplay();
    }, 10)};
  } else if (event.target.textContent == "Stop") {
    clearInterval(watch);
    watch = null;
  } else if (event.target.textContent == "Reset") {
    ms = 0;
    sec = 0;
    min = 0;
   
      clearInterval(watch);
      watch = null;
      updateDisplay()
    
  }
});
