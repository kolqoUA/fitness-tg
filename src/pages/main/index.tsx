import "./styles.css";

import { useState } from 'react'

import { Button } from "../../shared/ui";
import { MealTracker, NutritionInfo, WaterTracker } from "../../widgets";
import { getMeals } from "../../entities/meal";

const Home = () => {
  const [waterIntake, setWaterIntake] = useState(0);

  const meals = getMeals();

  return (
		<div className='home-container'>
			<Button className='button-surface'>Click me</Button>
			<NutritionInfo />
			<WaterTracker setWaterIntake={setWaterIntake} waterIntake={waterIntake} />
			<MealTracker meals={meals} />
		</div>
	)
};
export default Home;
