
import './App.css';
import Home from './pages/Home';
import Term from './pages/term/Term';
import Tulip from './pages/term/Tulip';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
function App() {
  
  return (
    
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/term" exact component={() => <Term />} />
          <Route path="/term/tulip" exact component={() => <Tulip />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
