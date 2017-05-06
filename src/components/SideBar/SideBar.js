// @flow
import React from 'react'
import './SideBar.css';

const SideBar = () => (
  <div className="side-bar">
    <iframe
      src="http://www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Ffocustas&amp;colorscheme=light&amp;height=500&amp;show_faces=true&amp;header=false&amp;stream=true&amp;show_border=false&amp;appId=114634505698"
      className="side-bar-item"
      scrolling="no"
      style={{border:'none', overflow:'hidden', height: '500px'}}
      allowTransparency="true"></iframe>
  </div>
);

export default SideBar;
