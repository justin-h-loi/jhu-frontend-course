/*
File: SpeakHello.js
Course: EN.605.787.SP25 - Front End Web App Development
Assignment: Module 4
Due Date: 2/18/2025
Author: Justin Loi - jloi2
*/
// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2
(function (window) {

  // STEP 3: Create an object, called 'helloSpeaker' to which you will attach
  // the "speak" method and which you will expose to the global context
  // See Lecture 52, part 1
  var helloSpeaker = {};

  // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
  var speakWord = "Hello";

  // STEP 4: Rewrite the 'speak' function such that it is attached to the
  // helloSpeaker object instead of being a standalone function.
  // See Lecture 52, part 2
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }

  // 2a
  helloSpeaker.speakSimple = function(name) {
    return speakWord + " " + name;
  }

  // STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
  // 'helloSpeaker' on the global scope as well.
  // See Lecture 52, part 2
  // (Note, Step 6 will be done in the SpeakGoodBye.js file.)
  window.helloSpeaker = helloSpeaker;
})(window);
