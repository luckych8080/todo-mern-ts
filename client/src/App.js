import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-4">
      <AddItem />
      <ItemList />
    </div>
  );
}

export default App;
