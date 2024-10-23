import {ItemProps} from "@/types";
import ItemCard from "../common/item-card";

const ItemList = ({data}: {data: ItemProps[]}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data.map(item => (
        <ItemCard key={item.filename} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
