import {Routes, Route, Link } from "react-router-dom";
import logo from "../assets/red30-tech-logo.png";

import Home from "./Home";
import Catergories from "./Categories";
import About from "./About";
import Header from "./Header";
import Catergory from "./Category";
import Session from "./Session";
import Register from "./Register";
import Confirmation from "./Confirmation";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/"element={<Home title="Welcome to Red30tech" />}/>
        <Route path="About" element={<About />}/>
        <Route path="Catergories" element={<Catergories />}>
         <Route path=":catId" element={<Catergory />}>
            <Route path=":sessionId" element={<Session />} />
         </Route>
         <Route index element={<h3>Select a catergory from above</h3>} />
        </Route>
        <Route path="Register" element={<Register />}/>
        <Route path="Confirmed" element={<Confirmation />}/> 
        <Route path="*" element={<h1 className="not-found">Page Not Found</h1>}/>
      </Routes>

      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
