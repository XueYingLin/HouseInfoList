import React, { useState } from "react";
import HouseInfo from "./HouseInfo";
import dummyData from "./dummyData";

const HouseInforList = () => {
  const [houseList, setHouseList] = useState(dummyData);

  return (
    <div className="house_info_list">
      <h2>House information are listed as below:</h2>
      <div className="display_house_info">
        {houseList.map(house => (
          <HouseInfo
            address={house.address}
            favorite={house.favorite}
            status={house.status}
            price={house.price}
            size={house.size}
            lotSize={house.lotSize}
            buildYear={house.buildYear}
            beds={house.beds}
            baths={house.baths}
            link={house.link}
          />
        ))}
      </div>
    </div>
  );
};

export default HouseInforList;
