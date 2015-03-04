$('#showDropMenu').on('click', function(){
  $('#dropMenu').slideToggle();
});

$('#showSearchBar').on('click', function(){
  $('input[type="text"]').slideToggle(100);
});

$('[role="alert"]').on('click', function(){
  $('<p>Connect to start receiving private recommendations \n from your friends</p>').appendTo('#el-signIn').delay(4000).fadeOut(500);
  $('[role="alert"]').hide().delay(4050).fadeIn(200);
});


