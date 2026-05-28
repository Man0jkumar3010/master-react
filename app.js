import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement("div", { id: "parent",key:1 }, [
  React.createElement("div", { id: "child",key:2}, [
    React.createElement("h1", {key:3}, "1% Better Everyday ❤️"),
    React.createElement("h2", {key:4}, "I'm an h2 tag"),
  ]),

]);

//JSX

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);