import { useState } from "react";



export default function ShoppingForm() {
    const [foodName, setFoodName] = useState("");
    const [foodQuanity, setFoodQuanity] = useState("");
  

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault() //prevents default
        //create new object
       const newFoodAdded={
            
            name: foodName,
            quanity: foodQuanity,
        };
        
     const addFoodToServer = async (newFoodAdded: {  name: string; quanity: string; }) =>{
        const response = await fetch("http://localhost:3000/shoppinglist", {
            method: "POST",
            body: JSON.stringify(newFoodAdded),
            headers: {
                "Content-Type": "application/json"
            },

        });
        if(response.ok) {
            console.log("Food added successfully");
        }
    }

        addFoodToServer(newFoodAdded)
        setFoodName("");
        setFoodQuanity("");
        
    };

    return (
        <div>
            <h1>What we need:</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={foodName}
                placeholder="Item"
                onChange={(e) => setFoodName(e.target.value)}
            />
            <input
                type="text"
                value={foodQuanity}
                placeholder="How Much?"
                onChange={(e) => setFoodQuanity(e.target.value)}
            />
            
            <button type="submit">Add To Foodlist</button>
            
        </form>
    
    </div>
    );
}






