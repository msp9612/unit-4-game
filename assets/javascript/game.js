// Matt Petrower

const targetMin = 19, targetMax = 120;
const crystalMin = 1, crystalMax = 12;

var targetNumber, crystalScore;
var wins = 0, losses = 0;


newGame();


// Starting a new game
function newGame() {
    crystalScore = 0;

    // Random target number
    targetNumber = Math.floor(Math.random() * (targetMax - targetMin + 1)) + targetMin;

    // Random crystal values
    $(".crystal").each(function () {
        $(this).attr("crystal-value", Math.floor(Math.random() * (crystalMax - crystalMin + 1)) + crystalMin);

        // Uncomment the following line to see the crystal values:
        // console.log($(this).attr("alt") + ": " + $(this).attr("crystal-value"));
    });

    $("#target-number").text(targetNumber);
    $("#crystal-score").text(crystalScore);
}


// Crystal is clicked
$(".crystal").on("click", function () {
    crystalScore += parseInt($(this).attr("crystal-value"));
    $("#crystal-score").text(crystalScore);

    if (crystalScore === targetNumber) {
        // Player wins
        alert("You win!");
        wins++;
        $("#wins").text(wins);
        newGame()
    }
    else if (crystalScore > targetNumber) {
        // Player loses
        alert("You lose.");
        losses++;
        $("#losses").text(losses);
        newGame();
    }
});