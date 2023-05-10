import { useDispatch } from "react-redux";
import { deleteItem, toggleStatus } from "../slice/itemSlice";

export function useCustomDispatch() {
  const dispatch = useDispatch();
  return dispatch;
}

const Item = ({ id, title, description, status, tag, timestampCreated }) => {
  console.log(tag);
  console.log(timestampCreated);
  const dispatch = useCustomDispatch();

  const handleCheckbox = () => {
    dispatch(toggleStatus({ id, status: !status }));
  };

  const handleDelete = () => {
    dispatch(deleteItem({ id }));
  };

  return (
    <li
      className={`shadow-md rounded-md p-4 mb-4 w-96 ${
        status ? "line-through bg-slate-700" : "bg-white"
      }`}
    >
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
      <div>
        {tag
          ? tag.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-600 py-1 px-2 rounded-md mr-2 mb-2 inline-block"
              >
                {tag}
              </span>
            ))
          : ""}
      </div>
      <div>{new Date(timestampCreated).toLocaleDateString()}</div>
      <div className="text-gray-600 mt-2  max-w-xs">{description}</div>
    </li>
  );
};

export default Item;
