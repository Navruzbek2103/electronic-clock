var elBody = document.querySelector("body");
var containerDiv = document.createElement("div");
var infoHeading = document.createElement("h1");
var img = document.createElement("img");
var boxDiv = document.createElement("div");
var time = document.createElement("h3");
var timeSec = document.createElement("h4")
var author = document.createElement("h5");
var date = document.createElement("p");




function showDate(){
  var newDate = new Date()

  containerDiv.className = "container";
  infoHeading.className = "info";
  infoHeading.textContent = "Real time";
  img.className = "img";
  img.src = "./image/electronic-clock.png";
  img.alt = "electronic clock";
  time.className = "time";
  timeSec.className = "timeSec";
  author.className = "name";
  author.textContent = "By: Navruzbek"
  date.className = "date";


  elBody.appendChild(containerDiv)

  containerDiv.appendChild(infoHeading);
  containerDiv.appendChild(img);
  containerDiv.appendChild(boxDiv);

  boxDiv.appendChild(time)
  boxDiv.appendChild(timeSec)
  boxDiv.appendChild(author)
  boxDiv.appendChild(date)



  document.querySelector(".time").textContent = newDate.getHours() + " : " + newDate.getMinutes()

  document.querySelector(".timeSec").textContent = " : " + newDate.getSeconds()

  document.querySelector(".date").textContent = newDate.getDate() + ". " + newDate.getMonth() + ". " + newDate.getFullYear()
}

setInterval(function(){
  showDate()
})
