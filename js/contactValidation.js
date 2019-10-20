/*JS that validates the contact form.
  It just check is the user has submitted all the required fields(all of them)*/
$(document).ready(function(){
  $("#contact-form").submit(function(e){

    var formIsValid = true;

    //Check the input fields for no data and flash if no data found.
    $("#contact-form input[type=text], #contact-form textarea").each(function(){
      //Check if empty.
      if(!$.trim($(this).val())){
        formIsValid = false;
        $(this).addClass("flash");
        //Remove the class after animation finished.
        var that = $(this);
        setTimeout(function(){
          that.removeClass("flash");
        },800);
      }
    });

    if(!formIsValid){
      //Prevent form from submitting.
      e.preventDefault();
    }
  });
});
