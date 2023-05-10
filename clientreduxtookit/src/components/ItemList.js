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
          description={item.description}
          status={item.status}
        />
      ))}
    </ul>
  );
};

export default ItemList;
