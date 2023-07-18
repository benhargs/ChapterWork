var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .2, .25, .3, .25, .24, .25, .25, .25, .27, .25, .26, .29];
var maxScore=scores[0];
var currentScore = scores[scoreCounter];
var scoreCounter = 0;
var maxScores =[]; 
var i = 0;
var bestValue= 100;
var bestScore = 0;


while (scoreCounter != scores.length) {
    console.log("Bubble solution #", scoreCounter + 1 , "score: ", scores[scoreCounter])
    if (currentScore > maxScore) {
        maxScore=currentScore
        maxScores=[]
        maxScores.push(scoreCounter+1)
        bestValue = costs[scoreCounter]
        
    } else if (currentScore == maxScore) {
        maxScores.push(scoreCounter+1)
        if (costs[scoreCounter]< bestValue) {
            bestValue=costs[scoreCounter]
            bestScore=scoreCounter+1
        }
    }

    scoreCounter+=1
    currentScore= scores[scoreCounter]
}

let maxScoresString = maxScores.map(score => '#' + score);
maxScoresString = maxScoresString.join(' ').toString();


console.log("Bubbles tests: ", scores.length)
console.log("Highest bubble score: ", maxScore)
console.log("Solutions with highest score: ",maxScoresString)
console.log("Solution with the lowest cost: ", bestValue, "Which is solution number: ", bestScore)
