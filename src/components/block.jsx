import React from "react";
import styled from "styled-components";

export const Block = ({
  blockNumber,
  blockClass,
  blockColor,
  handleColorChange,
}) => {
  return (
    <BlockWrapper
      className={blockClass}
      colorName={blockColor}
      onClick={handleColorChange}
    >
      <span>{blockNumber}</span>
    </BlockWrapper>
  );
};

const BlockWrapper = styled.div`
  background: ${(props) => props.colorName};
  display: grid;
  color: #fff;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.4);
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  span {
    margin: auto;
  }
`;
