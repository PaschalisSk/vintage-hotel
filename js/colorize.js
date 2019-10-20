/*JS in order to add column colored headers and to navigation links.
  Randomly select the color for the
  header of each column element among an array
  with the colors of the logo.*/
$(document).ready(function(){
  //Colors from the logo.
  var colorCodes = ["#cd2228","#28a04f","#1d71b9","#f2c727"];

  //Add the header element in every element with class="col".
  $( ".col" ).prepend( "<div class='col-header'></div>" );

  //Iterate over every element with class="col-header".
  $(".col-header").each(function(){

    //Select a color randomly.
    var color = colorCodes[Math.floor(Math.random() * colorCodes.length)];

    //Set the top border color.
    $(this).css("background-color", color);

    //Code in order to remove colors used from the array
    //in order to avoid color duplication.
    colorCodes.splice(colorCodes.indexOf(color), 1);

    //If we used all the colors refill the array.
    if(colorCodes.length == 0){
      colorCodes = ["#cd2228","#28a04f","#1d71b9","#f2c727"];
    }
  });

  //Code to handle link color changes in nav.
  $("nav li a").hover(
    function(){
      var colorCodes = ["#cd2228","#28a04f","#1d71b9","#f2c727"];
      $(this).css("color",colorCodes[Math.floor(Math.random() * colorCodes.length)]);
    },function(){
      $(this).css("color","#FCFCFC");
    });

});
