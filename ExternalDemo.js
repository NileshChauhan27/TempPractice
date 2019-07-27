/*jshint esversion: 6 */
"use strict";

function myFunction() {
  function UiComponent() {
    var _this = this; // (A)
    var button = document.getElementById("myButton");
    button.addEventListener("click", function() {
      console.log("CLICK");
      _this.handleClick(); // (B)
    }); //THIS IS TEMP CHANGE.
  }
  UiComponent.prototype.handleClick = function() {
    //    ···
  };
}
