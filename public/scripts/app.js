console.log('App.js is running!');

// JSX - Is extension for JavaScript XML, given to us by React.

// var template  = <p>This is from the JSX in the app.js</p>;

var template = React.createElement(
    "h1",
    { id: "app" },
    "Something new"
  );
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);