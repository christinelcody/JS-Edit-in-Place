$(document).on('ready', function() {
  $(".userInfo").on("click", function() {
    $(this).hide();
    var inputVar = $('<input class="userInput">');
    var currentInfo = $(this);
    $(this).after(inputVar);

    inputVar.on('blur', function() {
      $(this).remove();
      currentInfo.show();
      currentInfo.text($(this).val());
    });

  });
})