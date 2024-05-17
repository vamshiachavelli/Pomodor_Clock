const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const time = document.getElementById("time");

let timeLeft = 1800;
let interval;

const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const second = timeLeft % 60;

    time.innerHTML =
    
    `${minutes.toString().padStart(2,"0")} 
    :
    ${second.toString().padStart(2,"0")}`;

};

const startTime = () => {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if(timeLeft === 0){
            clearInterval(interval);
            alert("Times up!")
            timeLeft = 1800;
            updateTimer();

        }
     }, 1000);
};

const stopTime = () => clearInterval(interval);

const resetTime = () => {
    clearInterval(interval);
    timeLeft = 1800;
    updateTimer();
}

start.addEventListener("click", startTime);
stop.addEventListener("click", stopTime);
reset.addEventListener("click", resetTime);
