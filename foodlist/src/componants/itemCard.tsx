import {  useState } from 'react';
import MyButton from './MyButton';



interface ItemCardProps {
    id: number;
    foodName: string;
    foodQuanity: number;
    expiryDate: string;
   
  }// This is setting the prop values
export default function itemCard({id, foodName, foodQuanity, expiryDate}:ItemCardProps){

    //I'm setting state for all the parts I want to edit later
    const [isEditing, setIsEditing] = useState(false);
    const [newFoodName, setNewFoodName] = useState(foodName);
    const [newFoodQuanity, setNewFoodQuanity] = useState(foodQuanity);
    const [newExpiryDate, setNewExpiryDate] = useState(expiryDate);
const handleDelete = () => {
    const url = "http://localhost:3000/foodList/" + id;
    fetch(url, {method: "DELETE"}).then((response)=>{
        if(!response.ok){
            throw new Error("Something went wrong")
        }
       
    }).catch((e)=> {
        console.log(e);
    });
}
interface NewNames{
    id: number;
    newFoodName: string;
    newFoodQuanity: number;
    newExpiryDate: string;
}
const handleEdit = () => {
const editFoodList = {
    id: "id",
    name: newFoodName,
    quanity: newFoodQuanity,
    expiryDate: newExpiryDate
    
}

    fetch ("http://localhost:3000/foodList/" + id, {
     method: "PUT",
     headers: {
        "Content-Type": "application/json"
     },
     body: JSON.stringify(editFoodList),

    }).then((response) =>{
        return response.json();

    })
    
    setIsEditing(false);
    console.log("Edited:", { newFoodName, newFoodQuanity, newExpiryDate });
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
                <MyButton doSomething={() => handleDelete()} name="Delete" />
                <MyButton doSomething={isEditing ? handleEdit : () => setIsEditing(true)} name={isEditing ? "Save" : "Edit"} />

            </div>
        </div>
        )
    }

