$(function () {
  var hour = dayjs().hour() - 9;
  $('.time-block').each(function() {
    var id = $(this).attr('id').split('-')[1];
    var rowHour = parseInt(id);

    if (hour < rowHour) {
      $(this).addClass('future');
    } else if (hour > rowHour) {
      $(this).addClass('past');
    } else {
      $(this).addClass('present');
    };
  });

  $(document).on('click', '.saveBtn', function(){
    var key = $(this).closest('.time-block').attr('id');
    var txt = $(this).prev().val();
    localStorage.setItem(key, txt);
  }) 
  $('.time-block').each(function(){
    var id = $(this).attr('id');
    var txtArea = $(this).find('.description');
    var txt = localStorage.getItem(id);
    txtArea.val(txt);
  })
  var dateTime = new Date();
  document.getElementById('dateTime').innerHTML = dateTime;
});