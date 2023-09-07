
const time = document.querySelector(".time");
const day = document.querySelector(".day");


//FUNCTION TO GET THE UTC TIME AND UPDATING IT EVERY 1SEC
function updateUTCTime() {
  const now = new Date();
  const utcHour = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const utcSeconds = now.getUTCSeconds();

  const utcTime = `${utcHour}:${utcMinutes}:${utcSeconds}`;

  time.textContent = utcTime;
}

setInterval(updateUTCTime, 1000);

//FUNCTION TO GET THE DAY 
function getDayOfWeek() {
  const now = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = daysOfWeek[now.getUTCDay()];
 
  day.textContent= currentDay;
  
}
getDayOfWeek()