let millisecText = document.querySelector(".millisec");
let secondsText = document.querySelector(".seconds");
let minutesText = document.querySelector(".minutes");
let buttons = document.querySelectorAll(".fa-solid");
let container = document.querySelector(".container");
let rmvtimer = document.querySelector(".timer");
let rmvlabel = document.querySelector(".label");
let interval;

pylet seconds = 0;
let minutes = 0;

function updateTime() {
    millisec++;
    if (millisec > 99) {
        seconds++;
        millisec = 0;
    }
    if (seconds > 59) {
        minutes++;
        seconds = 0;
    }

    millisecText.textContent = (millisec < 10 ? "0" : "") + millisec;
    secondsText.textContent = (seconds < 10 ? "0" : "") + seconds;
    minutesText.textContent = (minutes < 10 ? "0" : "") + minutes;
}

// ... (your initial variable declarations and updateTime function)

buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        if (e.target.classList.contains('fa-play')) {
            clearInterval(interval);
            interval = setInterval(updateTime, 10);
        }
        else if (e.target.classList.contains('fa-pause')) {
            clearInterval(interval);
        }

        else if (e.target.classList.contains('fa-xmark')) {
            setTimeout(() => {
                rmvtimer.style.display = 'none';
                rmvlabel.style.display = 'none';
                let ayeinp = document.createElement("h1");
                ayeinp.innerHTML = "Ayein!";
                container.appendChild(ayeinp);
                
            })
            
            setTimeout(() => {
                container.childNodes.forEach(node => {
                    if (node.nodeName === 'H1') {
                        node.parentNode.removeChild(node);
                    }
                });
            
                rmvtimer.style.display = 'flex';
                rmvlabel.style.display = 'flex';
                clearInterval(interval);
                millisec = 0;
                seconds = 0;
                minutes = 0;
                millisecText.textContent = "00";
                secondsText.textContent = "00";
                minutesText.textContent = "00";
                console.log("iiii")
            }, 3000)

        }
    });
});



