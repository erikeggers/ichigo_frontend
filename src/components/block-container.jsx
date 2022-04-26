import { useState } from "react";
import styled from "styled-components";
import { Block } from "./block";

export const BlockContainer = () => {
  // Any color can be passed as a prop to the Block component.
  const colorNames = [
    "#FFC300",
    "#FF5733",
    "#C70039",
    "#900C3F",
    "#581845",
    "#480620",
    "#ff5733",
    "#ff8a33",
    "#ffbd33",
    "#fff033",
    "#dbff33",
    "#a8ff33",
    "#0C905D",
  ];
  
  // Each block will have a unique key and value. 
  const blocks = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  // Set intial colors randomly
  const [colors, setColors] = useState(
    colorNames
      .sort(() => Math.random() - Math.random())
      .slice(0, Object.entries(blocks).length)
  );

  // Handle color change when block is clicked
  const handleColorChange = () => {
    setColors(
      colorNames
        .sort(() => Math.random() - Math.random())
        .slice(0, Object.entries(blocks).length)
    );
  };

  return (
    <ContainerWrapper>
      {/* For each of the blocks entries, display a block and give it the values */}
      {Object.entries(blocks).map(([key, value]) => (
        <Block
          key={value}
          blockNumber={key}
          blockClass={value}
          blockColor={colors[key - 1]}
          handleColorChange={handleColorChange}
        />
      ))}
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: 20px;
  
  @media only screen and (min-width: 601px) {
    grid-template-areas:
      "ONE ONE TWO TWO"
      "ONE ONE TWO TWO"
      "ONE ONE THREE FOUR"
      "ONE ONE THREE FOUR"
      "FIVE SEVEN SEVEN EIGHT"
      "SIX SEVEN SEVEN EIGHT"
      "SIX SEVEN SEVEN NINE";
  }

  @media only screen and (max-width: 600px) {
    grid-template-rows: repeat(6, 1fr);
    grid-template-areas:
      "ONE ONE ONE ONE"
      "THREE THREE FOUR FOUR"
      "TWO TWO TWO TWO"
      "SEVEN SEVEN SEVEN SEVEN"
      "FIVE FIVE EIGHT EIGHT"
      "SIX SIX NINE NINE";
  }

  .one {
    grid-area: ONE;
  }
  .two {
    grid-area: TWO;
  }
  .three {
    grid-area: THREE;
  }
  .four {
    grid-area: FOUR;
  }
  .five {
    grid-area: FIVE;
  }
  .six {
    grid-area: SIX;
  }
  .seven {
    grid-area: SEVEN;
  }
  .eight {
    grid-area: EIGHT;
  }
  .nine {
    grid-area: NINE;
  }
`;
