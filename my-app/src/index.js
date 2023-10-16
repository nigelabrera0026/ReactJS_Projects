import React from "react";
import ReactDOM from "react-dom";
import Header from './Header.js';


function Page() {
    return (
        <div>
            <Header />
            <h1>Test</h1>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"));