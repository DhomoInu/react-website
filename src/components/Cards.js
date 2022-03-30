import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import ron from "../images/img1.png";
import mes from "../images/img5.jpg";
import art1 from "../images/img2.png";
import art2 from "../images/img4.jpg";
import art3 from "../images/img3.png";

function Cards() {
  return (
    <div className="cards">
      <h1>Check some of our Articles!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={ron}
              text="Ronaldos incredible career broken down"
              label="Sports"
              path="/services"
            />
            <CardItem
              src={mes}
              text="The greatest ever to ver play the game?"
              label="Sports"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={art1}
              text="The most expensive places to live broken bown"
              label="Analytics"
              path="/services"
            />
            <CardItem
              src={art2}
              text="Future predictions on current trends"
              label="Analytics"
              path="/products"
            />
            <CardItem
              src={art3}
              text="Future home owners guide"
              label="Analytics"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
