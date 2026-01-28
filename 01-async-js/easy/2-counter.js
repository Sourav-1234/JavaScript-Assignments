// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)


let count = 0;

function startCounter() {
  console.log(count);
  count++;

  setTimeout(startCounter, 1000); // call again after 1 second
}

// start the counter
startCounter();
