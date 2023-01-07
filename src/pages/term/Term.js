import React from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import {
//     Route,
//     Link,
//     Routes,
//     BrowserRouter
// } from "react-router-dom";
// import Term from './pages/term/Term';
// import Home from './pages/Home';
// import Tulip from './pages/term/Tulip';
import './Term.css';

function Term() {


    return (

        // <><BrowserRouter>
        //     <><Navbar collapseOnSelect expand="lg">
        //         <Container>
        //             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //             <Navbar.Collapse id="responsive-navbar-nav">
        //                 <Nav className="ml-auto">
        //                     <Nav.Link as={Link} to="/">Home</Nav.Link>
        //                     <Nav.Link as={Link} to="/term">Term</Nav.Link>

        //                 </Nav>
        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>

        //         <Routes>
        //             <Route path="/" element={<Home />}></Route>
        //             <Route path="/term" element={<Term />}></Route>
        //             <Route path="/term/tulip" element={<Tulip />}></Route>
        //         </Routes></>

        // </BrowserRouter>
        
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
            </div>

    )
}

export default Term;