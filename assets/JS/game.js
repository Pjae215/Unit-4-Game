
//assigning a random number for user to guess between 19-120

var numbertoguess = Math.floor(Math.random() * 102) + 19;

  $("#randomnumber").text(numbertoguess);

  //number options are from 1-12 and counter starts at zero
  
  var counter = 0;

  var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // so that options can repeat
  for (var i = 0; i < numberOptions.length; i++) {

    

//creating a function that pulls a random number from the array 
    var min = 0
    var max = (numberOptions.length - 1)
    
    function randomindex () {
      var randIndex = Math.floor(Math.random() * (max - min)) + min;
      return randIndex
    }
//applies the function to image
    $("#image1").attr("crystalvalue",numberOptions[randomindex()]);
    $("#image2").attr("crystalvalue",numberOptions[randomindex()]);
    $("#image3").attr("crystalvalue",numberOptions[randomindex()]);
    $("#image4").attr("crystalvalue",numberOptions[randomindex()]);
  }

  // clicking a crystal calls for the image value that was assigned by the function
  $(".crystalimage").on("click", function() {
    
    var imagevalue = ($(this).attr("crystalvalue"));
    imagevalue = parseInt(imagevalue);

    // adding image value to the counter each time the image is clicked 
    counter += imagevalue;


    // each click an alert lets the user know the new score using the counter
    alert("New score: " + counter);

    // if the counter is less than the number to guess you win...if equal or over you lose
    if (counter === numbertoguess) {
      alert("You win!...Refresh page to play again");
    }

    else if (counter >= numbertoguess) {
      alert("You lose!!...Refresh page to play again");
    }
    // user manually resets game if they want to play again

});
