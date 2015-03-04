// shows hidden menu
$('.showDropMenu').on('click', function(){
  $('.dropMenu').slideToggle(150);
});
// shows input bar
$('.showSearchBar').on('click', function(){
  $('input[type="text"]').slideToggle(100);
});
// shows alert div box
$('[role="alert"]').on('click', function(){
  $('<p>Connect to start receiving private recommendations \n from your friends</p>').appendTo('.el-signIn').delay(4000).fadeOut(500);
  $('[role="alert"]').hide().delay(4000).fadeIn(250);
});

$('.show-menu-drop').on('click', function(){
  $('.menu-drop-down').slideToggle(150);
})

// var user = prompt('hello, what\'s your name?');

// $('<h2> Top picks for ' + user).appendTo('.topPics');

