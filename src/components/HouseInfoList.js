import React, { useState, useEffect } from "react";
import HouseInfo from "./HouseInfo";
import dummyData from "./dummyData";
import SearchForm from "./SearchForm";

const HouseInforList = () => {
  const [houseList, setHouseList] = useState(dummyData);
  const [originalHouseList, setOriginalHouseList] = useState(dummyData);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const results = originalHouseList.filter(character =>
      character.address.toLowerCase().includes(searchText.toLowerCase())
    );

    setHouseList(results);
  }, [searchText, originalHouseList]);

  const setSearch = s => {
    setSearchText(s);
  };

  return (
    <div className="house_info_list">
      <h2>House information are listed as below:</h2>
      <SearchForm setSearchText={setSearch} searchText={searchText} />
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
