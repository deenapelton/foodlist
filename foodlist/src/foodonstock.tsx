import FoodArrayMap from "./componants/FoodArrayMap";
import InventoryForm from "./componants/InventoryForm";

export default function foodonstock() {

  return (
    <div className="container-sm">
       <InventoryForm/>
       <FoodArrayMap/>
  </div>
  );
}
