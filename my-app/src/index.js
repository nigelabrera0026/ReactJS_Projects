import React from "react";
import ReactDOM from "react-dom";
import Header from './Header.js';
import Main from "./Main.js";


function Page() {
    return (
        <div>
            <Header />
            <Main />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"));