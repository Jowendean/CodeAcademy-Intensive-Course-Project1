let playerOneMoveOneType;
var playerOneMoveOneValue;
let playerOneMoveTwoType;
var playerOneMoveTwoValue;
let playerOneMoveThreeType;
var playerOneMoveThreeValue;

let playerTwoMoveOneType;
var playerTwoMoveOneValue;
let playerTwoMoveTwoType;
var playerTwoMoveTwoValue;
let playerTwoMoveThreeType;
var playerTwoMoveThreeValue;

var playerOnewins = 0;
var playerTwowins = 0;
var ties = 0;

//declare constants
const P1 = 'Player One';
const P2 = 'Player Two';
const TIE = 'Tie';
const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';

const setPlayerMoves = (player, m1t, m1v, m2t, m2v, m3t, m3v) => {

  if (!m1t || !m1v || !m2t || !m2v || !m3t || !m3v) {
    return;
  }
  //Check for valid types.
  if(!validTypes(m1t, m2t, m3t))
    return;

  //Check for valid values.
  if(!validValues(m1v, m2v, m3v))
    return;


  //If its player ones turn. Set Player Ones moves.
  switch(player){
    case P1:
      playerOneMoveOneType = m1t;
      playerOneMoveOneValue = m1v;
      playerOneMoveTwoType = m2t;
      playerOneMoveTwoValue = m2v;
      playerOneMoveThreeType = m3t;
      playerOneMoveThreeValue = m3v;
      break;



    case P2:
      playerTwoMoveOneType = m1t;
      playerTwoMoveOneValue = m1v;
      playerTwoMoveTwoType = m2t;
      playerTwoMoveTwoValue = m2v;
      playerTwoMoveThreeType = m3t;
      playerTwoMoveThreeValue = m3v;
      break;
  }
}

const validTypes = (t1, t2, t3) =>
  validType(t1) && validType(t2) && validType(t3);

const validType = (type) => type === ROCK || type === PAPER || type == SCISSORS;

const validValues = (v1, v2, v3) =>
  v1 >= 1 && v2 >= 1 && v3 >=1 && (v1 + v2 +v3) <= 99;

const getRoundWinner = (roundNum) =>{

  //Check valid values for number of rounds.
  if(roundNum < 1 || roundNum > 3)
    NULL;

  //Find the winner in round 1.
  if(roundNum === 1){
    //Get all cases in which player 1 wins by type
    if( (playerOneMoveOneType === ROCK) && (playerTwoMoveOneType === SCISSORS) ){
      return 'Player One';
    }
    else if( (playerOneMoveOneType === PAPER) && (playerTwoMoveOneType === ROCK) ){
      return 'Player One';
    }
    else if( (playerOneMoveOneType === SCISSORS) && (playerTwoMoveOneType === PAPER) ){
      return 'Player One';
    }
    //Get all cases in which player 2 wins by type.
    else if( (playerTwoMoveOneType === ROCK) && (playerOneMoveOneType === SCISSORS) ){
      return 'Player Two';
    }
    else if( (playerTwoMoveOneType === PAPER) && (playerOneMoveOneType === ROCK) ){
      return 'Player Two';
    }
    else if( (playerTwoMoveOneType === SCISSORS) && (playerOneMoveOneType === PAPER) ){
      return 'Player Two';
    }
    //Find winner where types are equal to one another using values.
    else{
      if(playerOneMoveOneValue > playerTwoMoveOneValue){
        return 'Player One';
      }
      else if(playerOneMoveOneValue < playerTwoMoveOneValue){
        return 'Player Two';
      }
      else{
        return 'Tie';
      }
    }
  }

    //Find the winner in round 2.
    if(roundNum === 2){
      //Get all cases in which player 1 wins by type
      if( (playerOneMoveTwoType === ROCK) && (playerTwoMoveTwoType === SCISSORS) ){
        return 'Player One';
      }
      else if( (playerOneMoveTwoType === PAPER) && (playerTwoMoveTwoType === ROCK) ){
        return 'Player One';
      }
      else if( (playerOneMoveTwoType === SCISSORS) && (playerTwoMoveTwoType === PAPER) ){
        return 'Player One';
      }
      //Get all cases in which player 2 wins by type.
      else if( (playerTwoMoveTwoType === ROCK) && (playerOneMoveTwoType === SCISSORS) ){
        return 'Player Two';
      }
      else if( (playerTwoMoveTwoType === PAPER) && (playerOneMoveTwoType === ROCK) ){
        return 'Player Two';
      }
      else if( (playerTwoMoveTwoType === SCISSORS) && (playerOneMoveTwoType === PAPER) ){
        return 'Player Two';
      }
      //Find winner where types are equal to one another using values.
      else{
        if(playerOneMoveTwoValue > playerTwoMoveTwoValue){
          return 'Player One';
        }
        else if(playerOneMoveTwoValue < playerTwoMoveTwoValue){
          return 'Player Two';
        }
        else{
          return 'Tie';
        }
      }
    }

      //Find the winner in round 3.
      if(roundNum === 3){
        //Get all cases in which player 1 wins by type
        if( (playerOneMoveThreeType === ROCK) && (playerTwoMoveThreeType === SCISSORS) ){
          return 'Player One';
        }
        else if( (playerOneMoveThreeType === PAPER) && (playerTwoMoveThreeType === ROCK) ){
          return 'Player One';
        }
        else if( (playerOneMoveThreeType === SCISSORS) && (playerTwoMoveThreeType === PAPER) ){
          return 'Player One';
        }
        //Get all cases in which player 2 wins by type.
        else if( (playerTwoMoveThreeType === ROCK) && (playerOneMoveThreeType === SCISSORS) ){
          return 'Player Two';
        }
        else if( (playerTwoMoveThreeType === PAPER) && (playerOneMoveThreeType === ROCK) ){
          return 'Player Two';
        }
        else if( (playerTwoMoveThreeType === SCISSORS) && (playerOneMoveThreeType === PAPER) ){
          return 'Player Two';
        }
        //Find winner where types are equal to one another using values.
        else{
          if(playerOneMoveThreeValue > playerTwoMoveThreeValue){
            return 'Player One';
          }
          else if(playerOneMoveThreeValue < playerTwoMoveThreeValue){
            return 'Player Two';
          }
          else{
            return 'Tie';
          }
        }
      }
}

const getGameWinner = () =>{

  //Get results from round 1.
  if(getRoundWinner(1) === 'Player One'){
    playerOneWins++;
  }
  else if(getRoundWinner(1) === 'Player Two'){
    playerTwoWins++;
  }
  else{
    ties++;
  }

  //Get results from round 2.
  if(getRoundWinner(2) === 'Player One'){
    playerOneWins++;
  }
  else if(getRoundWinner(2) === 'Player Two'){
    playerTwoWins++;
  }
  else{
    ties++;
  }

  //Get results from round 3.
  if(getRoundWinner(3) === 'Player One'){
    playerOneWins++;
  }
  else if(getRoundWinner(3) === 'Player Two'){
    playerTwoWins++;
  }
  else{
    ties++;
  }

  if(playerOneWins > playerTwoWins){
    return 'Player One';
  }
  else if(playerOneWins < playerTwoWins){
    return 'Player Two';
  }
  else{
    return 'Tie';
  }

}
