import React from "react";

const dateToday = new Date();
const timeCurrent = dateToday.getHours();

let greeting;
if (timeCurrent < 12) {
  greeting = "Good Morning";
} else {
  greeting = "Good AfterNoon";
}

function Head() {
  return <h1>{greeting}</h1>;
}

export default Head;
