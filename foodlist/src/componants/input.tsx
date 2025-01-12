import { useState } from "react";



export default function input() {
    const [meal, setMeal] = useState("");
 
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault() //prevents default
        //create new object
      const newMeal={
        name: meal
      }
        
     const addMealToServer = async () =>{
        const response = await fetch("https://67830f4a8b6c7a1316f366aa.mockapi.io/foodlist/menu", {
            method: "POST",
            body: JSON.stringify(newMeal),
            headers: {
                "Content-Type": "application/json"
            },

        });
        if(response.ok) {
            console.log("Food added successfully");
        }
    }

        addMealToServer()
        setMeal("");
       
    };

    return (
        <div>
            
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={meal}
                placeholder="What's to Eat?"
                onChange={(e) => setMeal(e.target.value)}
            />
         
            
            <button type="submit">Add To Menu</button>
            
        </form>
    
    </div>
    );
}