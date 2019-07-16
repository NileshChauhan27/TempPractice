/*jshint esversion: 6 */
"use strict";

function myFunction() {

    let person = {
        getGreeting() {
            return "Hello from person";
        }
    };
    
    let dog = {
        getGreeting() {
            return "Hello from dog";
        }
    };
    
    
    let friend = {
        getGreeting() {
            return Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!";
        }
    };
    
    // set prototype to person
    Object.setPrototypeOf(friend, person);
    console.log(friend.getGreeting());                      // "Hello, hi!"
    console.log(Object.getPrototypeOf(friend) === person);  // true
    console.log(Object.getPrototypeOf(friend).getGreeting());
    
    // set prototype to dog
    Object.setPrototypeOf(friend, dog);
    console.log(friend.getGreeting());                      // "Woof, hi!"
    console.log(Object.getPrototypeOf(friend) === dog);     // true

}