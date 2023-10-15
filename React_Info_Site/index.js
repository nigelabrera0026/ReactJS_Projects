/**
 * @author Nigel Abrera
 * @description Creating a static info site that would make you grasp the basics of React JS
 * @date 10/14/2023
 */


// Generating an h1 tag, first react code.
// ReactDOM.render(<h1>Hello, Everyone!</h1>, document.getElementById("root"))

// Practice #1, NOTE: it overwrites the first one.
// ReactDOM.render(<p>This is my first React Line</p>, document.getElementById("root"))

/* 
Practice # 2
Try to write that 1-liner of React code again! This time, see if you can figure out how to
render an <ul> with 2+ <li>s inside
*/

/*
ReactDOM.render(
    <ul>
        <li>Test 1</li>
        <li>Test 2</li>
        <li>Test 3</li>
    </ul>, document.getElementById("root")
)
*/

// Vids answer
/*
ReactDOM.render(
    <ul>
        <li>Thing 1</li>
        <li>Thing 2</li>
    </ul>,
    document.getElementById("root")
)
*/

// Rendering some content after a tag  
/*
function MainContent() {
    return (
        <h1>I'm learning React</h1>
    )
}
*/

// Calling the function like a tag
/*
ReactDOM.render(
    <div>
        <NavBar />
        <MainContent /> 
    </div>,
    document.getElementById("root")
)
*/

/*
Challenge - recreate the above line of code in vanilla JS
by creating and appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
*/

h1 = document.createElement("h1");
