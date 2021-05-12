const getUserName = () => {
  const user = prompt("Please enter your name");
  document.getElementById("myName").textContent = user;
};

const getCurrentTime = () => {
  const clockElement = document.querySelector(".clock");

  const date = new Date();
  console.log(date.getDay());
  let currentDay;

  switch (true) {
    case date.getDay() === 1:
      currentDay = "Pazartesi";
      break;
    case date.getDay() === 2:
      currentDay = "Salı";
      break;
    case date.getDay() === 3:
      currentDay = "Çarşamba";

      break;
    case date.getDay() === 4:
      currentDay = "Perşembe";
      break;
    case date.getDay() === 5:
      currentDay = "Cuma";
      break;
    case date.getDay() === 6:
      currentDay = "Cumartesi";
      break;
    case date.getDay() === 7:
      currentDay = "Pazar";
      break;
    default:
      break;
  }
  let currentHours = date.getHours();
  let currentMinutes = date.getMinutes();
  let currentSeconds = date.getSeconds();

  currentHours = currentHours < 10 ? `0${currentHours}`: currentHours;
  currentMinutes = currentMinutes < 10 ? `0${currentMinutes}`: currentMinutes;
  currentSeconds = currentSeconds < 10 ? `0${currentSeconds}`: currentSeconds;


  actualTime = `${currentHours}:${currentMinutes}:${currentSeconds} ${currentDay}`;

  clockElement.textContent = actualTime;
};

const showTime = () => {
  setInterval(() => {
    getCurrentTime();
  }, 1000);
};
showTime();
getUserName();
