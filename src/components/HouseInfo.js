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
        <p>Address: {props.address}</p>
        <p>Favorite: {props.favorite}</p>
        <p>Status: {props.status}</p>
        <p>Price: {props.price}</p>
        <p>Size: {props.size}</p>
        <p>Lot Size: {props.lotSize}</p>
        <p>Builr Year: {props.buildYear}</p>
        <p>Beds: {props.beds}</p>
        <p>Baths: {props.baths}</p>
        <p>Link: {props.link}</p>
      </div>
    </HouseInfoStyle>
  );
};

export default HouseInfo;
