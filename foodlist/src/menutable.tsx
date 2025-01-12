
import {useEffect, useState,} from "react";
import ItemTable from "./itemtable"; // Import the ItemTable component
  
    type meal = {
      id: string;
      name: string;
    };//This is setting the typscript values
    
export default function menuTable() {
        const [meal, setMeal] = useState<meal[]>([]);
        //I have set the state
        //The useEffect is pulling my data in from my server
        useEffect(() => {
            fetch("https://67830f4a8b6c7a1316f366aa.mockapi.io/foodlist/menu")
            .then((response) => response.json())
            .then((data) => {
                ;
                setMeal(data); //Then I'm putting my data into state
            });
        }, []);


    return(
        <div className="container-sm">
           
    <ul><span>
        {meal.map((meal:meal) => (
                   <ItemTable
                   id={meal.id}
                   key={meal.id}
                   mealName={meal.name}
                   />
                ))}</span>
   </ul>
    

</div>
    )
}