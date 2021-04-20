import React from "react";

const dateToday = new Date();
const timeCurrent = dateToday.getHours();

let greeting;
if (timeCurrent < 12) {
  Greeting = "Good Morning";
} else {
  Greeting = "Good AfterNoon";
}

function Dateheading() {
  return <h1>{greeting}</h1>;
}

export default Dateheading;
