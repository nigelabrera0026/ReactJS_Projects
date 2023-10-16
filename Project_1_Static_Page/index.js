/*
The ideal way is to separate each function from react in a different file
Example below.

File Header

import React from "react";

export default function Header() {
    return (
        <header>
            <nav></nav>
        </header>
    )
}

in some way you can
export default Header;

File Footer

import React from "react";

export default function Footer() {
    return (
        <footer>
            <small></small>
        </footer>
    )
}



File index.js

import React from "react";
import ReactDOM from "react-DOM";
import Header from "./Header.js;
import Footer from "./Footer.js";

function MainContent() {
    return (
        <div>
            <h1>

            </h1>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}
ReactDOM.render(<Page />, document.getElementById("root"));
 */



/*

function Hello({greeting, name}) {
    return (
        <h2>
            {greeting} {name}
        </h2>
    );
}


function App() {
    return (
        <>
            <Hello name="Brian" greeting="Bonjour"/>
            <Hello name="Nige" greeting="Kamusta"/>
            <Hello name="Brian" greeting="Bonjour"/>
        </>
    )
}

function App() {
    const name = ["Brian", "Frank", "Corgi"];
    const helloComponents = name.map((name, i) => <Hello name={ name } /> );

    return (
        <>
            {hellocComponents}
        </>
    );
}


function App() {
    const name = ["Brian", "Frank", "Corgi"];

    return (
        <>
            {name.map((name, i) => (
                <Hello name={name} />
            ))}
        </>
    );
}

*/


