import React from "react";
import styled from "styled-components";

const HouseInfo = props => {
  const HouseInfoStyle = styled.div`
    background: #efefef;
    border: 1px solid #bfbfbf;
  `;

  return (
    <HouseInfoStyle>
      <div className="house_info">
        <p>{props.address}</p>
        <p>{props.favorite}</p>
        <p>{props.status}</p>
        <p>{props.price}</p>
        <p>{props.size}</p>
        <p>{props.lotSize}</p>
        <p>{props.buildYear}</p>
        <p>{props.beds}</p>
        <p>{props.baths}</p>
        <p>{props.link}</p>
      </div>
    </HouseInfoStyle>
  );
};

export default HouseInfo;
