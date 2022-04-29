import React from "react";
import { ThemeContext } from "./ThemeContext";

type BoxProps = {};

const Box = (props: BoxProps) => {
  const theme = React.useContext(ThemeContext);
  return (
    <div
      style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}
    >
      ThemeContext
    </div>
  );
};

export default Box;
