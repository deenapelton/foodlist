import { useState } from "react";



export default function InventoryForm({addFood}) {
    const [foodName, setFoodName] = useState("");
    const [foodQuanity, setFoodQuanity] = useState(0);
    const [expiryDate, setExpiryDate] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault() //prevents default
        //create new object
       const newFoodAdded={
            id: Math.random(),
            name: foodName,
            quanity: foodQuanity,
            expiryDate: expiryDate,
        };
        addFood(newFoodAdded)
        setFoodName("");
        setFoodQuanity(0);
        setExpiryDate("");
    };

    return (
        <div>
            <h1>Inventory Form</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={foodName}
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
                onChange={(e) => setExpiryDate(e.target.value)}
            />
            <button type="submit">Add Food</button>
        </form>
    
    </div>
    );
}