/**
 * @author Nigel Abrera
 * @description Creating a static info site that would make you grasp the basics of React JS
 * @date 10/14/2023
 */

/*
Generating an h1 tag, first react code.
ReactDOM.render(<h1>Hello, Everyone!</h1>, document.getElementById("root"))

Practice #1, NOTE: it overwrites the first one.
ReactDOM.render(<p>This is my first React Line</p>, document.getElementById("root"))


Practice # 2
Try to write that 1-liner of React code again! This time, see if you can figure out how to
render an <ul> with 2+ <li>s inside



ReactDOM.render(
    <ul>
        <li>Test 1</li>
        <li>Test 2</li>
        <li>Test 3</li>
    </ul>, document.getElementById("root")
)

Vid's answer

ReactDOM.render(
    <ul>
        <li>Thing 1</li>
        <li>Thing 2</li>
    </ul>,
    document.getElementById("root")
)

Rendering some content after a tag  

function MainContent() {
    return (
        <h1>I'm learning React</h1>
    )
}


Calling the function like a tag

ReactDOM.render(
    <div>
        <NavBar />
        <MainContent /> 
    </div>,
    document.getElementById("root")
)



Challenge - recreate the above line of code in vanilla JS
by creating and appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root


Note: it doesn't work when you have the type="text/babel" in script tag

let h1 = document.createElement("h1");
h1.textContent = "This is vanilla JS";
h1.classList.add("header");
let root = document.getElementById("root");
root.appendChild(h1);



Vid's answer

const h1 = document.createElement("h1");
h1.textContent = "This is an imperative way to program";
h1.className = "header";
document.getElementById("root").appendChild(h1);

We use react to be declarative since vanilla JS is an imperative way to code

ReactDOM.render(<h1 className="header">Hello, React!</h1>, doocument.getElementById("root"))

JSX
Sample syntaxes are, instead of using class we use className

const h1 = document.createElement("h1");
h1.textContent = "This is an imperative way to program";
h1.className = "header";
document.getElementById("root").appendChild(h1);
console.log(h1); The output would be <h1 class="header">

const element = <h1 className="header">This is JSX</h1>;
ReactDOM.render(element, document.getElementById("root"));

console.log(element); The output would be below
{
    type: "h1",
    key: null,
    ref: null,
    props: {
        className: "header", 
        children: "This is JSX"
    },
    _owner: null,
    _store: {}
}

Dev Notes: it could only render 1 parent element.

const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div
)

ReactDOM.render(
    page,
    document.getElementById("root")
)


Challenge:

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing", "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now

const nav = (
    <nav>
        <h1>My webby</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    nav, document.getElementById("root")
)

Vid's answer

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navbar, document.getElementById("root"))
)


End of CDNs

To use JSX
import React from "react";
import ReactDOM from "react-dom"

Challenge: find out what happens if we try to append JSX 
to our div#root using .append() instead of ReactDOM

const page = (
    <div>
        <h1>My React webby</h1>
        <h3>Reasons i use react</h3>
        <ol>
            <li>Composable</li>
            <li>Declarative</li>
        </ol>
    </div>
)

document.getElementById("root").append(JSON.stringify(page));
ReactDOM.render(
    page, document.getElementById("root")
)
*/

