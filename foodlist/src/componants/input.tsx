import { useState } from "react";



export default function input() {
    const [meal, setMeal] = useState("");
 
    const handleSubmit = () => {
       // e.preventDefault() //prevents default
        //create new object
      const newMeal={
        name: meal
      }
        
     const addMealToServer = async () =>{
        const response = await fetch("http://localhost:3000/meal", {
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