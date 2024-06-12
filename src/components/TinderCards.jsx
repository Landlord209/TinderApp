import React, { useState } from "react";
import cardstyle from "./tindercards.module.css";
import elonImg from "../assets/dav.jpg";
import favImg from "../assets/fav.jpg";
import TinderCard from "react-tinder-card";

const TinderCards = () => {
  // const [people, setPeople] = useState([]);

  const profiles = [
    {
      name: "Elon Musc",
      image: elonImg,
    },
    {
      name: "Jeff Bezoz",
      image: favImg,
    },
  ];

  const swiped = (direction, nameToRemove) => {
    console.log("remove :" + nameToRemove);
    // setLastDirection(direction)
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };

  return (
    <div className={cardstyle.tindercards}>
      {profiles.map(({ name, image }) => {
        return (
          <TinderCard
            preventSwipe={["up","down"]}  
            className={cardstyle.swipe}
            key={name}
            onSwipe={(direction)=>{swiped(direction,name)}}
            onCardLeftScreen={()=>{outOfFrame(name)}}
          >
            <div
              className={cardstyle.tindercard}
              style={{ backgroundImage: `url(${image})` }}
            >
              <h1>{name}</h1>
            </div>
          </TinderCard>
        );
      })}
    </div>
  );
};

export default TinderCards;
