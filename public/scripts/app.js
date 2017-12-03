"use strict";

console.log('App.js is running!');

// JSX - Is extension for JavaScript XML, given to us by React.

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Decision Helper"
  ),
  React.createElement(
    "p",
    null,
    "This is some info"
  )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
