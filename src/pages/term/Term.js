import React from "react";
import './Term.css';

function Term() {


    return (

        <div>
            <header className="headline">
                <div className="container">
                    <h1>Term 📝</h1>
                </div>
            </header>

            <div className="display-term-list container">

                <ul style={{listStyle: 'none'}}>
                    <li>
                        <a href="./term/tulip">Work Term I : Tulip Retail</a>
                    </li>
                    <br />
                    <li>
                        <a href="./workterm/comingSoon">Work Term II : Place Holder</a>
                    </li>
                </ul>

            </div>
        </div>

    )
}

export default Term;