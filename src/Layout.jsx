import React from "react";
import Desk from "./components/Desk";

export default function Layout() {

  return (
    <div className="Layout">
      <div className="BackWall">
      </div>
      <div className="ComputerScreen">Editor Goes Here</div>
      <Desk />
      <div className="FileCabinet">FileCabinet</div>
    </div>
  );
};