// @flow
import React, { Component } from "react";
import { createComponent } from "react-fela";
import SrOnly from "../SrOnly/SrOnly";
import Container from "../Container/Container";
import { media } from "../../constants";
import Nav from "./Nav";
import ToggleButton from "./ToggleButton";
import NavBrand from "./NavBrand";
import background from "./background.jpg";

const FixedNavBar = createComponent(
  () => ({
    backgroundImage: `url(${background})`,
    backgroundRepeat: "repeat-x",
    left: 0,
    paddingTop: ".5rem",
    paddingRight: "1rem",
    paddingBottom: ".5rem",
    paddingLeft: "1rem",
    position: "fixed",
    right: 0,
    zIndex: 10,
    [media.tablet]: {
      marginBottom: "20px"
    }
  }),
  "header"
);

const NavBarContainer = createComponent(
  () => ({
    display: "flex",
    flexDirection: "column",
    [media.tablet]: {
      flexDirection: "row"
    }
  }),
  Container("nav"),
  ["role"]
);

const IconBar = createComponent(({ marginTop }) => ({
  backgroundColor: "#fff",
  display: "block",
  width: "22px",
  height: "2px",
  borderRadius: "1px",
  marginTop
}));

const FlexContainer = createComponent(() => ({
  display: "flex",
  justifyContent: "flex-end"
}));

class NavBar extends Component {
  state = {
    collapsed: true
  };

  toggleCollapse = (event: Event) => {
    event.preventDefault();
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    return (
      <FixedNavBar>
        <NavBarContainer role="navigation">
          <FlexContainer>
            <NavBrand />
            <ToggleButton type="button" onClick={this.toggleCollapse}>
              <SrOnly>Toggle navigation</SrOnly>
              <IconBar />
              <IconBar marginTop="4px" />
              <IconBar marginTop="4px" />
            </ToggleButton>
          </FlexContainer>
          <Nav collapsed={this.state.collapsed} />
        </NavBarContainer>
      </FixedNavBar>
    );
  }
}

export default NavBar;
