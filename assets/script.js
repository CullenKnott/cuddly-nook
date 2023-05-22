$(function () {

  function currentTime() {
   var time = dayjs().format('H') // current hour of the day
   var timeBlock = $('.time-block')
    console.log(time)

    timeBlock.each(function () { // compares time to the id of the HTML and applies appropriate class
      var idSelector = parseInt($(this).attr('id'))
      if (idSelector == time) {
        $(this).attr('class', 'row time-block present')
      } else if (time > idSelector) {
        $(this).attr('class', 'row time-block past')
      } else {
        $(this).attr('class', 'row time-block future')
      }
    })
  
  }
  currentTime() // calls function

  var interval = setInterval(currentTime, 300000) // updates the page every 5mins without user input

  // displays current day
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D')) // ordinals arent working :(
  // saves to local storage
  $('button').on('click', function(event) {
    event.preventDefault();
    var descrIndex = $(this).siblings('.description').val(); //traverse DOM to grab value in the textarea
    var parentAttr = $(this).parent().attr('id')
    localStorage.setItem(parentAttr, JSON.stringify(descrIndex)) // saves in separate storage containers
  })

  // gets local storage and applies to page 
  $('#9 textarea').val(localStorage.getItem('9'))
  $('#10 textarea').val(localStorage.getItem('10'))
  $('#11 textarea').val(localStorage.getItem('11'))
  $('#12 textarea').val(localStorage.getItem('12'))
  $('#13 textarea').val(localStorage.getItem('13'))
  $('#14 textarea').val(localStorage.getItem('14'))
  $('#15 textarea').val(localStorage.getItem('15'))
  $('#16 textarea').val(localStorage.getItem('16'))
  $('#17 textarea').val(localStorage.getItem('17'))
});