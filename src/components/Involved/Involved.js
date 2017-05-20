// @flow
import React from "react";
import "./Involved.css";
import Blurb from "../Blurb/Blurb";
import photo from "./girls_on_bridge_small.jpg";

const Involved = () => (
  <div id="involved" className="parent-component">
    <h2>Get involved</h2>
    <div id="icon2" />
    <Blurb h3="Join our list">
      <p>
        Do you want to keep up-to-date with our events? Contact
        {" "}
        <a href="mailto:staff@focustas.org">staff@focustas.org</a>
        {" "}
        to join our email list.
      </p>
    </Blurb>
    <Blurb h3="Support FOCUS">
      <p>
        Whether you're a Christian from nearby or overseas, there are many ways you or your church group can partner with FOCUS, including prayer, donations, cooking meals, volunteering time, sharing about FOCUS, etc. To learn more, contact:
        {" "}
        <a href="mailto:staff@focustas.org">staff@focustas.org</a>
        .
      </p>
      <p>
        You can also
        {" "}
        <a
          target="blank"
          href="http://sub.afes.org.au/_donate/?campus=dbddf054ea53849d57604be4d006cee2&sessid=e7dec603c7a7ac8c737d27cfc624eecf"
        >
          donate to FOCUS
        </a>
        .
      </p>
    </Blurb>
    <img className="involved-image" src={photo} alt="Girls on a bridge" />
  </div>
);

export default Involved;
