import {  useState } from 'react';
import MyButton from './MyButton';



interface ItemCardProps {
    id: string;
    foodName: string;
    foodQuanity: string;
    
   
  }// This is setting the prop values
export default function itemList({id, foodName, foodQuanity}:ItemCardProps){

    //I'm setting state for all the parts I want to edit later
    const [isEditing, setIsEditing] = useState(false);
    const [newFoodName, setNewFoodName] = useState(foodName);
    const [newFoodQuanity, setNewFoodQuanity] = useState(foodQuanity);


    //This is the delete request
const handleDelete = () => {
    const url ="http://localhost:3000/shoppinglist/" + id;
    fetch(url, {method: "DELETE"})
   
    .then((response)=>{
        if(!response.ok){
            throw new Error("Something went wrong")
        }
       
    }).catch((e)=> {
        console.log(e);
    });
} 


//this is my edit request
const handleEdit = () => {
const editFoodList = {
    id: id,
    name: newFoodName,
    quanity: newFoodQuanity,
    
}

    fetch ("http://localhost:3000/shoppinglist/" + id, {
     method: "PUT",
     headers: {
        "Content-Type": "application/json"
     },
     body: JSON.stringify(editFoodList),

    }).then((response) =>{
        return response.json();

    })
    
    setIsEditing(false);
    console.log("Edited:", { newFoodName, newFoodQuanity});
}


    return(
        <div className="d-flex flex-column mb-3 border">
            {isEditing ? (
                <div>
                    <input 
                    type="text" 
                    value={newFoodName}
                    placeholder='Item'
                    onChange={(e) => setNewFoodName( e.target.value)}
                    />
                    <input type="text" 
                    value={newFoodQuanity}
                    placeholder='How much do you need?'
                    onChange={(e) => setNewFoodQuanity(e.target.value)}
                    />
                    </div>
                   
            ) : (
                <div>
                    <p>{foodName}: <span>  {foodQuanity}</span></p>
                   
                   
                </div>
            )}
            <div className="d-flex">
                <MyButton doSomething={() => handleDelete()} name="Delete" />
                <MyButton doSomething={isEditing ? handleEdit : () => setIsEditing(true)} name={isEditing ? "Save" : "Edit"} />

            </div>
        </div>
        )
    }

