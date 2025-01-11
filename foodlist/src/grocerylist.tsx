import ShoppingForm from "./componants/shoppingform";
import ShoppingListArray from "./componants/shoppinglistarray";
export default function groceryList(){

    return(
        <div className="container-sm">
    <ShoppingForm/>
    <ShoppingListArray/>
    
    </div>
    )
}