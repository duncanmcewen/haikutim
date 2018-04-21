var time = 1;
var timerStarted = false
var counter = getById('counter')
var haiku = getById('haiku')
var intervalId

function getById(id) {
  return document.getElementById(id)
}



function startTimer() {
  timerStarted = true

  intervalId = setInterval(function() {

    //random rgb colors
    // leaving off: create new R G B valuese on every tick: shove into "newColour"

    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)
    var r2 = Math.floor(Math.random() * 255)
    var g2 = Math.floor(Math.random() * 255)
    var b2 = Math.floor(Math.random() * 255)
    var newColour = `rgb(${r}, ${g}, ${b})` // output example => "rgb(0.234, 0.l623, 0.234)"
    var newColourText = `rgb(${r2}, ${g2}, ${b2})`

    document.body.style.backgroundColor = newColour

    //timer logic
    if (time > 0) {
      console.log(time);
      counter.textContent = time
      time = time - 1;
      //counter.style.backgroundColor = newColour
      counter.style.color = newColourText
      haiku.style.display = 'none'
      console.log('hidden')
    } else {
      console.log("timer is finished");
      counter.textContent = 'timer is finished'
      button.textContent = 'Start'
      clearInterval(intervalId)
      timerStarted = false
      showHide()
    }

  }, 500)

}


var button = getById('button')

button.addEventListener('click', function() {
  if (timerStarted) {
    console.log('timer started. lets pause');
    clearInterval(intervalId)
    timerStarted = false
    button.textContent = 'Start'
  } else {
    if (time === 0) {
      time = 1
    }

    startTimer()
    console.log('start timer');
    button.textContent = 'Pause'
  }


})



function showHide() {
   haiku.style.display = 'block'
   console.log('i should be here')
  // if (timerStarted === true) {
  //   haiku.style.display = ''
  //   console.log('i should be here')
  // }
  // else {
  //   haiku.style.display = 'none'
  // }
}
