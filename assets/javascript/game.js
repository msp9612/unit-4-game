// Matt Petrower

var targetNumber = 53;

$("#number-to-guess").text(targetNumber);

var counter = 0;
var numberOptions = [10, 5, 3, 7];

for (var i = 0; i < numberOptions.length; i++) {

    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystals-big");
    imageCrystal.attr("src", "assets/images/crystals-big.jpg");
    // imageCrystal.attr("alt=Crystal");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#crystals").append(imageCrystal);
}

$(".crystals-big").on("click", function () {

    var crystalValue = ($(this).attr("data-crystalvalue"));

    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    alert("New score: " + counter);

    if (counter === targetNumber) {
        alert("You win!");
    }
    else if (counter >= targetNumber) {
        alert("You lose!!");
    }

});