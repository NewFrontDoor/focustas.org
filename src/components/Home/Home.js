// @flow

import React from "react";
import { createComponent } from "react-fela";
import Welcome from "../Welcome/Welcome.js";
import Events from "../Events/Events.js";
import Involved from "../Involved/Involved.js";
import Contact from "../Contact/Contact.js";
import Where from "../Where/Where.js";
import About from "../About/About.js";
import SideBar from "../SideBar/SideBar.js";
import Container from "../Container/Container";

const HomeContainer = createComponent(
  () => ({
    paddingTop: "70px",
    paddingLeft: "1rem",
    paddingRight: "1rem"
  }),
  Container()
);

const Home = () => (
  <HomeContainer>
    <div id="home">
      <Welcome />
      <Events />
      <Involved />
      <About />
      <Where />
      <Contact />
    </div>
    <SideBar />
  </HomeContainer>
);

export default Home;
