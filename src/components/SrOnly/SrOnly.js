// @flow

import { createComponent } from "react-fela";

const SrOnly = createComponent(
  () => ({
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0",
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
    border: "0"
  }),
  "span"
);

export default SrOnly;
