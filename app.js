let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let sec = document.getElementById("sec");
let p = document.getElementById("p");

setInterval(clock, 1000);

clock();


function clock() {
  let currantDate = new Date();

  let secR = currantDate.getSeconds() / 60;
  let minuteR = (secR + currantDate.getMinutes()) / 60;
  let hourR = (minuteR + currantDate.getHours()) / 12;
  p.textContent = currantDate.toLocaleTimeString()

  setRotarian(sec, secR);
  setRotarian(minute, minuteR);
  setRotarian(hour, hourR);
}

function setRotarian(el, ro) {
  el.style.setProperty(`--rotaion`, ro * 360);
}


let try6 = [  5 , "+" , 5    ]
let try8 = try6.join("")
console.log( eval(try8)  );




