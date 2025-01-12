import {useEffect, useState,} from "react";
import ItemCard from "./itemCard";
type Food = {
  id: number;
  name: string;
  quanity: number;
  expiryDate: string;
};//This is setting the typscript values


export default function FoodArrayMap() {
    const [food, setFood] = useState<Food[]>([]);
    //I have set the state
    //The useEffect is pulling my data in from my server
    //UseEffect keeps the page from constant renders


    
    useEffect(() => {
        fetch("http://localhost:3000/foodList")
        .then((response) => response.json())
        .then((data) => {
            ;
            setFood(data); //Then I'm putting my data into state
        });
    }, []);
  
    
//Now I'm returning my data in a ItemCard and I'm using map to 
//give each food item it's own card

    return (
     
     <div className="d-flex flex-column mb-3" >
         
            {food.map((food: Food) => (
                 <ItemCard
                id={food.id}
                key={food.id}
                foodName={food.name}
                foodQuanity={food.quanity}
                expiryDate={food.expiryDate}
                
                />
            ))}
    </div>
            )
        
    
    
    }

    //This is my first container I did
  /*<div className="d-flex flex-column mb-3 border" key={food.id}>
                <h2>{food.name}</h2>
                <p>Quanity: {food.quanity}</p>
                <p>Expiration Date: {food.expiryDate}</p>*/