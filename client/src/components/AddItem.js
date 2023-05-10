import { useState } from "react";
import { useCustomDispatch } from "./Item";
import { addItem } from "../slice/itemSlice";

const AddItem = () => {
  const [item, setItem] = useState({});
  const dispatch = useCustomDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    if (item.title) {
      dispatch(addItem(item));
    }
    setItem({});
  }

  function handleChange(e) {
    e.stopPropagation();
    setItem({ ...item, [e.target.name]: e.target.value });
  }

  return (
    <form className="flex flex-col space-y-4 my-3 w-96">
      <input
        type="text"
        name="title"
        className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Title"
        value={item.title || ""}
        onChange={handleChange}
        maxLength={100}
      ></input>
      <input
        type="text"
        name="description"
        className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Description"
        value={item.description || ""}
        onChange={handleChange}
        maxLength={1000}
      ></input>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
};

export default AddItem;
