function updateTime() {
  let cairoElement = document.querySelector("#cairo");
  let ciaroDateElement = cairoElement.querySelector(".date");
  let ciaroTimeElement = cairoElement.querySelector(".time");
  let cairoTime = moment().tz("Africa/Cairo");

  ciaroDateElement.innerHTML = cairoTime.format("MMMM Do YYYY");
  ciaroTimeElement.innerHTML = cairoTime.format("h:mm:ss  [<small>]A[</small]");

  let RomeElement = document.querySelector("#Rome");

  let RomeDateElement = RomeElement.querySelector(".date");
  let RomeTimeElement = RomeElement.querySelector(".time");
  let RomeTime = moment().tz("Europe/Rome");

  RomeDateElement.innerHTML = RomeTime.format("MMMM	Do YYYY");
  RomeTimeElement.innerHTML = RomeTime.format("h:mm:ss [<small>]A[</small>]");
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = ` 
  <div class="city" id="cairo">
          <div class="name-date">
            <h2>${cityName}🕛</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")}</div>
        </div>
         
        `;
}

setInterval(updateTime, 1000);
updateCity();

let citiesSelectElement = document.querySelector("#cityoptions");
citiesSelectElement.addEventListener("change", updateCity);
