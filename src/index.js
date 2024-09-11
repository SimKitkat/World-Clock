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
  `;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#cityoptions");
citiesSelectElement.addEventListener("change", updateCity);
