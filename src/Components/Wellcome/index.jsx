import React from "react";

import styled from "styled-components";
import Airplane from "../../Assets/Airplane.png";

export const WellcomeDiv = styled.div`
  height: 10rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  p{
    font-size: 1.3rem;
    font-weight: 500;
    padding: 0 1rem;
  }
  h2{
    font-size: 2.5rem;
    font-weight: 700;
    padding:0.5rem 1rem;
  }
`;
let date = new Date();
let options = {
  weekday: "long",
  month: "short",
  day: "numeric",
};
let DateFormat = date.toLocaleDateString("en-US", options);

export default function Wellcome() {
  const daySuffix = (day) => {
    if (day % 10 === 1 && day !== 11) {
      return "st";
    }
    if (day % 10 === 2 && day !== 12) {
      return "nd";
    }
    if (day % 10 === 3 && day !== 13) {
      return "rd";
    }
    return "th";
  };

  return (
    <WellcomeDiv>
      <div>
        <p>
          {DateFormat} {daySuffix(date.getDay())}
        </p>
        <h2>Good Afternoon , {}</h2>
      </div>
      <img src={Airplane} alt="paper airplane" />
    </WellcomeDiv>
  );
}
