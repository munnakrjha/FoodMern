import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.css'
import { useContext } from 'react'
const FoodDisplay = ({category}) => {

    const {food_list}= useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
    <h2>Top dishes near you</h2>
    <div className='food-display-list'>
    {food_list.map((item,index)=>{
        // Check if the category is all 
        if(category=== "All" || category===item.category){
            // if the condition is match then  show the food item

        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
        }

    })}
    </div>

    </div>
  )
}

export default FoodDisplay