//  youssef arsanuos

  const mydate = document.getElementById("date");
  const newdate = document.createElement("p");
  newdate.id = "date";
  const text = document.createTextNode("OCTOBER 15-17, 2052");
  newdate.appendChild(text);
  mydate.parentNode.replaceChild(newdate, mydate);

  
  

// hager abdel nasser

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("scheduleBtn");
  btn.addEventListener("click", () => {
    alert("Redirecting to the detailed schedule 📅");
  });
});

// katrine yousry

document.getElementById("moreBtn").addEventListener("click", function () {
  alert("More keynote speakers will be announced soon!");
});

document.getElementById("themeBtn").addEventListener("click", function () {
  document.body.classList.toggle("light");
});


//youstina nabil
  const myquestion = document.getElementById("question");
  const questionn = document.createElement("h1");
  questionn.id = "question";
  const ques= document.createTextNode("WHY ATTEND?");
  questionn.appendChild(ques);
  myquestion.parentNode.replaceChild(questionn, myquestion);


//kerolos albair

const countDownDate = new Date().getTime() + (24*12*60*60*1000); 

  const countdown = document.getElementById("countdown");

  function updateTimer() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML =
      (days < 10 ? "0" + days : days) + " : " +
      (hours < 10 ? "0" + hours : hours) + " : " +
      (minutes < 10 ? "0" + minutes : minutes);

    if (distance < 0) {
      countdown.innerHTML = "EXPIRED";
    }
  }
  setInterval(updateTimer, 1000);

  //rojeh tamer
   const myfa = document.getElementById("fa");
  const faa = document.createElement("p");
  faa.id = "fa";
  const f= document.createTextNode("FAQ");
  faa.appendChild(f);
  myfa.parentNode.replaceChild(faa, myfa);