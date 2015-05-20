"use strict";

// Create an array with names of all students
var names = [];
var score = 0;
var nameScramble;
var quizName;


// get all student names
$('.profile-card').each(function () {
    names.push(this.id);
});

// Shuffle card order
$(document).ready(tinysort($('.profile-card + .profile-card'), {order:'rand'}));

// Set start of game parameters
function gameStart() {
  console.log('Starting Game');
  toggleButtons();
  score = 0;
  updateScore(0);
  $('.profile-card').click(isMatch);


  // scramble student names
  nameScramble = _.shuffle(names);

  // ask for first name
  askName();
}

function reset() {
  score = 0;
  updateScore(0);
  $('.profile-card').addClass('hidden');
  $('.current-name').text("Click Start!");
  toggleButtons();
  $('.profile-card').off();

  // randomize order. I have to keep the first card in first position otherwise it will mess up the resizing script I have in main.js
  tinysort($('.profile-card + .profile-card'), {order:'rand'});

}

function gameOver() {
  $('.profile-card').off();
  // $('#skip').addClass('hidden');
  console.log('You win! Your score is ' + score);
  $('.current-name').text("You did it! " + score + " points");
}
// Asking for a name
function askName() {
  var remaining = nameScramble.length;
  if (remaining > 0) {
    quizName = nameScramble.shift();
    console.log(quizName + '?');
    $('.current-name').text(quizName.toUpperCase() + '?');
  } else {
    gameOver();
  }
}


// Checking for a match
function isMatch() {

  console.log('matching...');
  console.log($(this).attr('id'));

  var selected = $(this).attr('id');

  if (selected === quizName) {
    console.log('Match!');
    updateScore(10);
    scorePop('+10');
    $(this).removeClass('hidden');
    askName();
  } else {
    console.log('Try again!');
    updateScore(-5);
    scorePop('-5');
  }

}

// display score alert
function scorePop(score) {
  var scorePop = $('.score-pop');
  scorePop.text(score);
  scorePop.removeClass('fadeOut hidden');
  scorePop.addClass('zoomIn');

  scorePop.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('zoomIn');
    $(this).addClass('fadeOut');
  });

}

// Update the score with parameter
function updateScore(val) {
  score = score + val;
  $('.score').text('score: ' + score);


}

// Skipping to the next name
function skipName() {
  nameScramble.push(quizName);
  updateScore(-1);
  askName();
}

// Toggle Buttons
function toggleButtons() {
  $('.button').toggleClass('hidden');
  $('.score').toggleClass('hidden');
}

// create click handlers

$('#reset').click(reset);
$('#skip').click(function() {
  skipName();
  scorePop('-1');
});
$('#start').click(gameStart);

// shrinking header
$(window).on("scroll touchmove", function () {
  $('header').toggleClass('tiny', $(document).scrollTop() > 0);
  $('.controls').toggleClass('tiny', $(document).scrollTop() > 0);
  $('.content').toggleClass('tiny', $(document).scrollTop() > 0);
  $('.score').toggleClass('tiny', $(document).scrollTop() > 0);

});
