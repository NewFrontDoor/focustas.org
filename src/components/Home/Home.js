// @flow
import React from 'react';
import Welcome from '../Welcome/Welcome.js';
import Events from '../Events/Events.js';
import Involved from '../Involved/Involved.js';
import Contact from '../Contact/Contact.js';
import Where from '../Where/Where.js';
import About from '../About/About.js';
import SideBar from '../SideBar/SideBar.js';
import './Home.css';

const Home = () => (
	<div id="home">
			<div className="home-container">
				<div className="row">
					<div className="col-xs-12 col-sm-9">
						<Welcome />
            <Events />
            <Involved />
            <About />
            <Where />
            <Contact />
					</div>
          <SideBar />
				</div>
			</div>
		</div>
);

export default Home;
