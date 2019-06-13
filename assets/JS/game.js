
//assigning a random number for user to guess between 19-120

var numbertoguess = Math.floor(Math.random() * 102) + 19;

  $("#randomnumber").text(numbertoguess);

  //number options are from 1-12 and counter starts at zero
  
  var counter = 0;

  var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // so that options can repeat
  for (var i = 0; i < numberOptions.length; i++) {}

    //
   // var img1 = $("#image1");
    //var img2 = $("#image2");
    //var img3 = $("#image3");
    //var img4 = $("#image4"); 

//assigning a random value from the options to each image 
    var min = 0
    var max = (numberOptions.length - 1)
    var randIndex = Math.floor(Math.random() * (max - min)) + min;

    $("#image1").attr("crystalvalue",numberOptions[randIndex]);
    $("#image2").attr("crystalvalue",numberOptions[randIndex]);
    $("#image3").attr("crystalvalue",numberOptions[randIndex]);
    $("#image4").attr("crystalvalue",numberOptions[randIndex]);


  // need to figure out how to get function AND value to apply to each image
  $(".crystalimage").on("click", function() {

    var imagevalue = ($(this).attr("crystalvalue"));
    imagevalue = parseInt(imagevalue);


    // adding image value to the counter each time the image is clicked 
    counter += imagevalue;


    // each click an alert lets the user know the new score using the counter
    alert("New score: " + counter);

    // if the counter is less than the number to guess you win...if equal or over you lose
    if (counter === numbertoguess) {
      alert("You win!");
    }

    else if (counter >= numbertoguess) {
      alert("You lose!!");
    }
    // need to add reset function to start game over when user wins or loses

});
