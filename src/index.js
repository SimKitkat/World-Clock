function updateTime() {
  let cairoElement = document.querySelector("#cairo");
  if (cairoElement) {
    let ciaroDateElement = cairoElement.querySelector(".date");
    let ciaroTimeElement = cairoElement.querySelector(".time");
    let cairoTime = moment().tz("Africa/Cairo");

    ciaroDateElement.innerHTML = cairoTime.format("MMMM Do YYYY");
    ciaroTimeElement.innerHTML = cairoTime.format(
      "h:mm:ss  [<small>]A[</small]"
    );
  }
  let RomeElement = document.querySelector("#Rome");
  if (RomeElement) {
    let RomeDateElement = RomeElement.querySelector(".date");
    let RomeTimeElement = RomeElement.querySelector(".time");
    let RomeTime = moment().tz("Europe/Rome");

    RomeDateElement.innerHTML = RomeTime.format("MMMM	Do YYYY");
    RomeTimeElement.innerHTML = RomeTime.format("h:mm:ss [<small>]A[</small>]");
  }
}

function currentLocation() {
  let yourCurrent = moment.tz.guess();
  let yourCurrentElement = document.querySelector("#currentCity");

  yourCurrentElement.innerHTML = yourCurrent.replace("_", " ").split("/")[1];
  let currentDateElement = document.querySelector(".currentDate");
  let currentTimeElement = document.querySelector(".currentTime");
  currentCityTime = moment.tz(yourCurrent);
  currentDateElement.innerHTML = currentCityTime.format("MMMM	Do YYYY");
  currentTimeElement.innerHTML = `${currentCityTime.format(
    "h:mm:ss"
  )} <small>${currentCityTime.format("A")}</small>`;
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(".city");
  citiesElement.innerHTML = `
  <div class="cities">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>

  </div>
    <a href="index.html" class="all-cities-link">All cities</a>
  
  `;
}
updateTime();
setInterval(updateTime, 1000);
setInterval(currentLocation, 1);

let citiesSelectElement = document.querySelector("#cityoptions");
citiesSelectElement.addEventListener("change", updateCity);
