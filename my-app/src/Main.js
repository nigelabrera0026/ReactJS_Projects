import React from "react";
import "../src/styles.css";

export default function MainContent() {
    return (
        <main className="main_content">
            <nav>
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including <br />
                    mobile apps</li>
                </ul>
            </nav>
        </main>
    )
}