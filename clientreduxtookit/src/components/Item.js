import { useDispatch } from "react-redux";
import { deleteItem, toggleStatus } from "../slice/itemSlice";

export function useCustomDispatch() {
  const dispatch = useDispatch();
  return dispatch;
}

const Item = ({ id, title, description, status }) => {
  const dispatch = useCustomDispatch();

  const handleCheckbox = () => {
    dispatch(toggleStatus({ id, status: !status }));
  };

  const handleDelete = () => {
    dispatch(deleteItem({ id }));
  };

  return (
    <li className="bg-white shadow-md rounded-md p-4 mb-4 w-96">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-500 mr-2"
          onChange={handleCheckbox}
          checked={status}
        ></input>
        <div className="text-lg font-medium max-w-xs">{title}</div>
        <button
          onClick={handleDelete}
          className="ml-auto bg-red-500 hover:bg-red-600 text-white rounded-full px-3 py-1"
        >
          X
        </button>
      </div>
      <div className="text-gray-600 mt-2  max-w-xs">{description}</div>
    </li>
  );
};

export default Item;
