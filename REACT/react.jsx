import React from "react";
import ReactDOM from "react-dom/client";

// this core react => this is called react element => react element is itself object => then rendar convert it to html
const parent = React.createElement(
  "h1",
  { id: "child" },
  React.createElement(
    "div",
    {},
    React.createElement("p", { id: "imgradechild" }, "creating sibling"),
    React.createElement("p", { id: "imgradechild2" }, "creating sibling2")
  )
);

// this is JSX in this process -- JSX is similar to html  => then parcel uses babel module to convert JSX syntax to  React => then Rander converts to html
const headings = <h1 className="heading"> Hello Worlds! </h1>;

//this is react element
const heading = (
  <div>
    <h1>this is react element</h1>
  </div>
);

//this is react functional component
const Functional2 = () => (
  <div>
    <h1>this is react element 2</h1>
  </div>
);

// or this
const Functional1 = () => (
  <div>
    {/* you can insert  functional component into another functional component with its variable enclosed with angular brackets */}
    <Functional2 />
    <h1>this is react element</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("parent"));
root.render(<Functional1 />);
console.log(root);

//functional components are rander differently with its variable and enclosed with angular brackets Eg --
// root.render(<Functional/>)

// within curly brackets {} we can use javascript  evevn we can call functioal component by invoking it like in javacript

//there is 3 types of syntax to use another functional component in another functional component
{
  /* you can call it*/
}
Functional1();
{
  /* you can write variable in angular brackets*/
}
<Functional1 />;
{
  /* you can use it similar like html syntax*/
}
<Functional1> </Functional1>;
