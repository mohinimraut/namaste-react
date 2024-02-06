import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // setShowItems(!showItems);
    //setShowIndex Its show itself.Here call the setShowIndex();and setShowIndex basically different setShowIndex all the time
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})x
          </span>
          <span className="cursor-pointer hover:opacity-10">⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
