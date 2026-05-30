import React from "react";
import ReactDOM from "react-dom/client";

// React Element is a javascript object => javascript object render in the dom as HTML element.
// JSX is a HTML like syntax. It also return a js object. With the help of the babel library complies/transpiler the code to browser understanable code.
// Babel is a complier/transpiler of the JSX code into JS code/browser understand code.
// Component composition is to render the nested component,Which means calling the mulipple components inside a single component.



// React Element
const reactElement = React.createElement("h1",{style:{color:"blue"}},"This is the react element");

// JSX Element
const jsxElement = <h1 style={{color:"green"}}>This is JSX Element (Jsx is not a part of the react, it is just a HTML like syntax)</h1>;

// Functional Component
const FunctionalComponent = () => (<div>
  <h1 style={{color:"red"}}>I'm from Functional Component</h1>
</div>);


// This is the way of render the reactElement/JSX code .
// const rootElement = ReactDOM.createRoot(document.getElementById("root"));
// rootElement.render(jsxElement);



// This is the way to rende the functiona component.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent/>);


