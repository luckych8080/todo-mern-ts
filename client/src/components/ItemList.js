import Item from "./Item";
import { useSelector } from "react-redux";

const ItemList = () => {
  const items = useSelector((state) => state.items);

  return (
    <ul className="max-w-xl ">
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description ? item.description : null}
          status={item.status}
          timestampCreated={item.timestampCreated ? item.timestampCreated : null}
          tag={item.tag ? item.tag : null}
        />
      ))}
    </ul>
  );
};

export default ItemList;
