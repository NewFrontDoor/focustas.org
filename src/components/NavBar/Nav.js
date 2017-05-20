// @flow
import React from "react";
import { createComponent } from "react-fela";
import { media } from "../../constants";

const NavCollapse = createComponent(({ collapsed }) => ({
  maxHeight: "340px",
  overflowX: "visible",
  borderTop: "1px solid transparent",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,.1)",
  webkitOverflowScrolling: "touch",
  height: collapsed ? "1px" : "auto",
  display: collapsed ? "none" : "block",
  marginTop: collapsed ? 0 : "10px",
  marginLeft: "-15px",
  marginRight: "-15px",
  [media.tablet]: {
    height: "auto",
    display: "flex",
    flexBasis: "100%"
  }
}));

const NavList = createComponent(
  () => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "space-between",
    paddingLeft: 0,
    margin: 0,
    flexBasis: "100%",
    [media.tablet]: {
      justifyContent: "flex-end"
    }
  }),
  "ul"
);

const NavItem = createComponent(
  () => ({
    display: "list-item",
    marginBottom: 0
  }),
  "li"
);

const NavLink = createComponent(
  () => ({
    display: "inline-block",
    position: "relative",
    paddingTop: "10px",
    paddingRight: "15px",
    paddingBottom: "10px",
    paddingLeft: "15px",
    color: "#FFF",
    fontFamily: "Raleway",
    fontSize: "1rem",
    fontWeight: "normal",
    lineHeight: "30px",
    textDecoration: "none",
    ":hover,:active": {
      color: "#FFF",
      textDecoration: "none"
    },
    [media.tablet]: {
      paddingTop: 0,
      paddingRight: "30px",
      paddingBottom: 0,
      paddingLeft: "30px"
    }
  }),
  "a",
  ["href"]
);

export type Props = {
  collapsed: boolean
};

const Nav = ({ collapsed }: Props) => {
  return (
    <NavCollapse collapsed={collapsed}>
      <NavList>
        <NavItem><NavLink href="#home">Home</NavLink></NavItem>
        <NavItem><NavLink href="#events">Events</NavLink></NavItem>
        <NavItem><NavLink href="#involved">Get involved</NavLink></NavItem>
        <NavItem><NavLink href="#about">About us</NavLink></NavItem>
        <NavItem><NavLink href="#contact">Contact</NavLink></NavItem>
      </NavList>
    </NavCollapse>
  );
};

export default Nav;
