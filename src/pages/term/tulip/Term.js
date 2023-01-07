import React from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import {
    Route,
    Routes,
} from "react-router-dom";
// import Term from './pages/term/Term';
// import Home from './pages/Home';
import Tulip from '../Tulip';
import './Term.css';

function Term() {


    return (

        <><Routes>
            <Route path="/term/tulip" element={<Tulip />}></Route>
        </Routes>
        
        <div>
                <header className="headline">
                    <div className="container">
                        <h1>Term 📝</h1>
                    </div>
                </header>

                <div className="display-term-list container">

                    <ul style={{ listStyle: 'none' }}>
                        <li>
                            <a href="/term/tulip">Work Term I : Tulip Retail</a>
                        </li>
                        <br />
                        <li>
                            <a href="./workterm/comingSoon">Work Term II : Place Holder</a>
                        </li>
                    </ul>

                </div>
            </div></>

    )
}

export default Term;