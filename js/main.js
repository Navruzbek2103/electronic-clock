var elBody = document.querySelector("body");

function showDate(){
  var newDate = new Date()
  document.querySelector(".time").textContent = newDate.getHours() + " : " + newDate.getMinutes()
  document.querySelector(".timeSec").textContent = newDate.getSeconds()

  document.querySelector(".date").textContent = newDate.getDate() + ". " + newDate.getMonth() + ". " + newDate.getFullYear()
}

setInterval(function(){
  showDate()
})
