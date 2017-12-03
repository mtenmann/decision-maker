console.log('App.js is running!');

// JSX - Is extension for JavaScript XML, given to us by React.

var template  = <div><h1>Decision Helper</h1><p>This is some info</p></div>;
var appRoot = document.getElementById("app");


ReactDOM.render(template, appRoot);