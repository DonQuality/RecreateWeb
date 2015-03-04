$('#showDropMenu').on('click', function(){
  $('#dropMenu').slideToggle();
});

$('#showSearchBar').on('click', function(){
  $('input[type="text"]').slideToggle('fast');
});

$('[role="alert"]').on('click', function(){
  // $('<p>Connect to start receiving private recommendations \n from your friends</p>').appendTo('#alert-box-fb');
  alert('Connect to start receiving private recommendations from your friends.');
});

