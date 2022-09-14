var bestSellingAlbums = [
  [1956, "Harry Belafonte", "Calypso"],
  [1967, "The Monkees", "More of The Monkees"],
  [1968, "The Jimi Hendrix Experience", "Are You Experienced?"],
  [1974, "Elton John", "Goodbye Yellow Brick Road"],
  [1977, "Fleetwood Mac", "Rumours"],
  [1981, "REO Speedwagon", "Hi Infidelity"],
  [1983, "Michael Jackson", "Thriller"],
  [1985, "Bruce Springsteen", "Born in the U.S.A."],
  [1987, "Bon Jovi", "Slippery When Wet"],
  [1993, "Whitney Houston", "The Bodyguard"],
  [1996, "Alanis Morissette", "Jagged Little Pill"],
  [1997, "Spice Girls", "Spice"],
  [2000, "NSYNC", "No Strings Attached"],
  [2003, "50 Cent", "Get Rich or Die Tryin'"],
  [2009, "Taylor Swift", "Fearless"],
  [2011, "Adele", "21"],
];

console.log("JavaScript file connected!");
// 11. You can save elements (tags) from your HTML file in your JS file in a number of ways.  This is one common way to do it:

// // EXAMPLE 1:
// var myVariable = document.getElementByID("myElementsID")
// EXAMPLE 2:
// var aDiv = document.getElementByID("mySpecialDiv")

// Save the paragraph in your HTML file as a variable called "intro".  Log it to the console.





// 12. Once something from your HTML is saved in JS file, it can be treated as an object.  The object has many properties and methods than can be accessed.  One property that can be accessed or changed is the innerHTML property.

// EXAMPLE:
// myVariable.innerHTML = "Words that will go inside my element."

// Inside your paragraph tag (which is now an object in your JS file), add the words "This is a list of hit albums!" using the innerHTML property





// 13. Save the ul elemeent in your HTML file as a variable called "list".  Log it to the console.






// 14. You can create new elements in your JS file and then append them to other elements in your HTML file.  

// EXAMPLE:
// var existingThing = document.getElementById("thing");
// var newParagraph = document.createElement("p");
// existingThing.appendChild(newParagraphElement)

// Create and append a new li element to your existing ul element.  Then set the innerHTML property of the new li element to "This is a test."





// 15.  Comment-out all the lines that you wrote for question #14.  That li element will be replaced by the following...

//  Write a loop that loops through the array bestSellingAlbums.  Each time the loop runs, it should create a new li element.  The innerHTML of first li element should say "Calypso by Harry Belafonte, 1956", the next li element should say "More of The Monkees by The Monkees, 1967", etc.  Each li element should be appended to the "list" variable (the ul element).






// 16. Save all the input elements and the submit button as four seperate variables called yearInput, albumInput, artistInput, and submitButton






// You can access the value of an input box (what someone types into the box) like this:

// EXAMPLE:
// yearInput.value

// In the function called addAlbum below, print all the values of the 3 input boxes.  Call the function to test it.  (It should just print out 3 empty stings.)





// 17. Now we're going to add more to this function.  When the function runs, it should also create a new li element.  The innerHTML property of this new li element should state the values of the 3 inputs.  And the li element should be appended to the list variable (the ul element).



const addAlbum = () => {



};

// 18.  Un-comment the line of code below and then test to see if the submit button works.

// submitButton.addEventListener("click", addAlbum);


