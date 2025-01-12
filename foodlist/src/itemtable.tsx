import {  useState } from 'react';
import MyButton from './componants/MyButton';



interface ItemCardProps {
    id: string;
    mealName: string;
    handleClick: any
    
   
  }// This is setting the prop values
export default function itemTable({id, mealName, handleClick}:ItemCardProps){
    //I'm setting state for all the parts I want to edit later
    const [isEditing, setIsEditing] = useState(false);
    const [newMeal, setNewMeal] = useState(mealName);

    //This is the delete request
const handleDelete = () => {
    const url ="http://localhost:3000/meal/" + id;
    fetch(url, {method: "DELETE"})
   
    .then((response)=>{
        if(!response.ok){
            throw new Error("Something went wrong")
        }
    handleClick();
    }).catch((e)=> {
        console.log(e);
    });
} 


//this is my edit request
const handleEdit = () => {
const editMealList = {
    id: id,
    name: newMeal,
}
    fetch ("http://localhost:3000/meal/" + id, {
     method: "PUT",
     headers: {
        "Content-Type": "application/json"
     },
     body: JSON.stringify(editMealList),

    }).then((response) =>{ handleClick()
        
        return response.json();
})
   
    setIsEditing(false); 
    
    console.log("Edited:", {newMeal});
   
}


    return(
        <div>
            {isEditing ? (
                <div>
                    <input 
                    type="text" 
                    value={newMeal}
                    placeholder='Meal'
                    onChange={(e) => setNewMeal( e.target.value)}
                    />
                    </div>
                   
            ) : (
               
                  <li className="h4">{mealName}</li>
               
            )}
            <span className="d-flex">
                <MyButton doSomething={() => handleDelete()} name="Delete" />
                <MyButton doSomething={isEditing ? handleEdit : () => setIsEditing(true)} name={isEditing ? "Save" : "Edit"} />

            </span>
        </div>
        )
    }