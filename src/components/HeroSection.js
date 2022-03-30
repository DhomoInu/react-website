import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import ReactPlayer from "react-player";
import Backvid from "../videos/digi.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video autoPlay muted loop src={Backvid}></video>

      <h1>DATA ANALYTICS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
