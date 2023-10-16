import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
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

// Modern way to Render in React.
const rootElement = document.getElementById("root");
const root = createRoot(rootElement)

root.render(
    <StrictMode>
        <Page />
    </StrictMode>
);

