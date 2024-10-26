import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { getVenue } from "./shared/context/venue/venue.service";
import { useVenue } from "./shared/context/venue/venue.hooks";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.navBackgroundColour};
`;
function App() {
  return <Background></Background>;
}

export default App;
