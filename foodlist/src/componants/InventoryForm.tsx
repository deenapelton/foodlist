import { useState } from "react";



export default function InventoryForm() {
    const [foodName, setFoodName] = useState("");
    const [foodQuanity, setFoodQuanity] = useState(0);
    const [expiryDate, setExpiryDate] = useState("");

    const handleSubmit = () => {
        //e.preventDefault() //prevents default
        //create new object
       const newFoodAdded={
            
            name: foodName,
            quanity: foodQuanity,
            expiryDate: expiryDate,
        };
        
     const addFoodToServer = async (newFoodAdded: {  name: string; quanity: number; expiryDate: string; }) =>{
        const response = await fetch("http://localhost:3000/foodList", {
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
        setFoodQuanity(0);
        setExpiryDate("");
    };

    return (
        <div>
            <h1>What we have:</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={foodName}
                placeholder="Item"
                onChange={(e) => setFoodName(e.target.value)}
            />
            <input
                type="number"
                value={foodQuanity}
                onChange={(e) => setFoodQuanity(parseInt(e.target.value))}
            />
            <input
                type="text"
                value={expiryDate}
                placeholder="Expiration Date"
                onChange={(e) => setExpiryDate(e.target.value)}
            />
            <button type="submit">Add To Foodlist</button>
            
        </form>
    
    </div>
    );
}