import { useState } from 'react';
import MyButton from './MyButton';
interface ItemCardProps {
    foodName: string;
    foodQuanity: number;
    expiryDate: string;
  }// This is setting the prop values
const ItemCard: React.FC<ItemCardProps>=({foodName, foodQuanity, expiryDate}) => {

    //I'm setting state for all the parts I want to edit later
    const [isEditing, setIsEditing] = useState(false);
    const [newFoodName, setNewFoodName] = useState(foodName);
    const [newFoodQuanity, setNewFoodQuanity] = useState(foodQuanity);
    const [newExpiryDate, setNewExpiryDate] = useState(expiryDate);
const handleDelete = () => {
    console.log("Delete");  
}
const handleEdit = () => {
   // e.preventDefault() //prevents default
    //create new object
   
}


    return(
        <div className="d-flex flex-column mb-3 border">
            {isEditing ? (
                <div>
                    <input 
                    type="text" 
                    value={newFoodName}
                    onChange={(e) => setNewFoodName( e.target.value)}
                    />
                    <input type="number" 
                    value={newFoodQuanity}
                    onChange={(e) => setNewFoodQuanity( parseInt(e.target.value))}
                    />
                    <input 
                    type="text" 
                    value={newExpiryDate} 
                    onChange={(e) => setNewExpiryDate( e.target.value)}
                    /> 
                  
                    </div>
                   
            ) : (
                <div>
                    <h2>{foodName}</h2>
                    <p>Quanity: {foodQuanity}</p>
                    <p>Expiration Date:{expiryDate}</p>
                </div>
            )}
            <div className="d-flex">
                <MyButton doSomething={() => setIsEditing(!isEditing)} name={isEditing ? "Save" : "Edit"} />
                <MyButton doSomething={handleDelete}  name="Delete" />
            </div>

        </div>
    )
};
export default ItemCard;
