// Update arrays in state 
import { use, useState } from "react"

function Mycomponent(){
    const [foods, setFoods] = useState(["mango","banana","apple"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => ([...f, newFood]));

    }
    function handleRemoveFood(index){
        setFoods(foods.filter((_,i) => i != index));
    }
    return (<div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) =>
                <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>
                )}
                <input tyep="text" id="foodInput" placeholder="Enter the food"></input>
                <button onClick={handleAddFood}>Add food</button>
            </ul>
    </div>)

}

export default Mycomponent