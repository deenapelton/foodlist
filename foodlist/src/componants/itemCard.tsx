import {  useState } from 'react';
import MyButton from './MyButton';
import NewButton from './NewButton'



interface ItemCardProps {
    id: number;
    foodName: string;
    foodQuanity: number;
    expiryDate: string;
    handleClick: any
  
   
  }// This is setting the prop values
export default function itemCard({id, foodName, foodQuanity, expiryDate, handleClick}:ItemCardProps){

    //I'm setting state for all the parts I want to edit later
    const [isEditing, setIsEditing] = useState(false);
    const [newFoodName, setNewFoodName] = useState(foodName);
    const [newFoodQuanity, setNewFoodQuanity] = useState(foodQuanity);
    const [newExpiryDate, setNewExpiryDate] = useState(expiryDate);


    //This is the delete request
const handleDelete = () => {
    const url ="http://localhost:3000/foodList/" + id;
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
const editFoodList ={
    id: id,
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
        handleClick()
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
                    <p>{foodName}: <br/> <span>Quanity: {foodQuanity}</span> <br/><span>Expiration Date:{expiryDate}</span></p>
                   
                    
                </div>
            )}
            <div className="d-flex">
                <NewButton doSomething={() => handleDelete()} name="Delete" />
                <MyButton doSomething={isEditing ? handleEdit : () => setIsEditing(true)} name={isEditing ? "Save" : "Edit"} />

            </div>
        </div>
        )
    }

