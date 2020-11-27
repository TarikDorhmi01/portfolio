import React from 'react'
import s from './Navbar.scss'
import { 
        Link,
        BrowserRouter as Router,
        Route,
        Switch
       } from 'react-router-dom'


function Navbar() {
    return (
        <div className="Navbar">
           <Router>
           <nav>
                <ul className={s}>
                    <li className="nav-li">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="nav-li">
                    <Link to="/Skills">Skills</Link>
                    </li>
                    <li className="nav-li">
                    <Link to="/Projects">Projects</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/">
                    { /* Insertion of home component is going to be over here   */ }
                </Route>
                <Route path="/Skills">
                    { /* Insertion of Skills component is going to be over here   */ }
                </Route>
                <Route path="/Projects">
                    { /* Insertion of Projects component is going to be over here   */ }
                </Route>
            </Switch>
           </Router>
           
          
        </div>
    )
}

export default Navbar
