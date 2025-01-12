import {useEffect, useState,} from "react";
import ItemList from "./itemlist";
type Food = {
  id: string;
  name: string;
  quanity: string;
  
};//This is setting the typscript values


export default function shoppingListArray() {
    const [food, setFood] = useState<Food[]>([]);
    const getFood = async() =>{
        await   fetch("http://localhost:3000/shoppinglist")
        .then((response) => response.json())
        .then((data) => {
            
            setFood(data); //Then I'm putting my data into state
        });
    }
    function handleClick(){
        getFood();
    }
    useEffect(()=>{
        getFood();
    },[]);
    //I have set the state
    //The useEffect is pulling my data in from my server
    /*useEffect(() => {
        fetch("http://localhost:3000/shoppinglist")
        .then((response) => response.json())
        .then((data) => {
            ;
            setFood(data); //Then I'm putting my data into state
        });
    }, []);*/
  
    
//Now I'm returning my data in a ItemCard and I'm using map to 
//give each food item it's own card

    return (
     
     <div className="d-flex flex-column mb-3">
         
            {food.map((food: Food) => (
                 <ItemList
                id={food.id}
                key={food.id}
                foodName={food.name}
                foodQuanity={food.quanity}
                handleClick={handleClick}
                
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