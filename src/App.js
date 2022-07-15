import "./App.css";

import { ReactComponent as ProfileIcon } from "./icons/profile.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as EducationIcon } from "./icons/education.svg";
import Navbar from "./Components/Navbar/Navbar";
import NavItem from "./Components/Navbar/NavItem";

import Education from "./Pages/Education/Education";
import Profile from "./Pages/Profile/Profile";
import Projects from "./Pages/Projects/Projects";
import Skillset from "./Pages/Skillset/Skillset";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar>
          <NavItem page="/" icon={<ProfileIcon />}>
            Profile
          </NavItem>

          <NavItem page="/Projects" icon={<CogIcon />}>
            Projects
          </NavItem>

          <NavItem page="/Education" icon={<EducationIcon />}>
            Education
          </NavItem>

          <NavItem page="/Skill-set" icon={<PlusIcon />}>
            Skill Set
          </NavItem>
        </Navbar>

        <Switch>
          <Route exact path="/Projects">
            <Projects />
            <Projects />
          </Route>
          <Route exact path="/Education">
            <Education />
          </Route>
          <Route exact path="/Skill-set">
            <Skillset />
          </Route>
          <Route path="/">
            <Profile sex="man" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
