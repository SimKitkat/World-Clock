function updateTime() {
  let cairoElement = document.querySelector("#cairo");
  let ciaroDateElement = cairoElement.querySelector(".date");
  let ciaroTimeElement = cairoElement.querySelector(".time");
  let cairoTime = moment().tz("Africa/Cairo");

  ciaroDateElement.innerHTML = cairoTime.format("MMMM Do YYYY");
  ciaroTimeElement.innerHTML = cairoTime.format("h:mm:ss  [<small>]A[</small]");

  let RomeElement = document.querySelector("#Rome");

  let RomeDateElement = Rome.querySelector(".date");
  let RomeTimeElement = Rome.querySelector(".time");
  let RomeTime = moment().tz("Europe/Rome");

  RomeDateElement.innerHTML = RomeTime.format("MMMM	Do YYYY");
  RomeTimeElement.innerHTML = RomeTime.format(
    "h:mm:ss" + "   " + "[<small>]A[</small>]"
  );
}

setInterval(updateTime, 1000);
