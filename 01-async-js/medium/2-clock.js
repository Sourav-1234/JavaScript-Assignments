// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function padZero(num) {
  return num < 10 ? "0" + num : num;
}

function showClock() {
  const now = new Date();

  let hours24 = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // 24-hour format
  const time24 = `${padZero(hours24)}:${padZero(minutes)}:${padZero(seconds)}`;

  // 12-hour format
  const ampm = hours24 >= 12 ? "PM" : "AM";
  let hours12 = hours24 % 12;
  hours12 = hours12 === 0 ? 12 : hours12;

  const time12 = `${padZero(hours12)}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`;

  console.clear();
  console.log("🕒 Current Time");
  console.log("24-hour format :", time24);
  console.log("12-hour format :", time12);

  // Call again after 1 second
  setTimeout(showClock, 1000);
}

// Start the clock
showClock();
