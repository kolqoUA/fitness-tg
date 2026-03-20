import "./styles.css";

import { Button } from "../../shared/ui";
import { NutritionInfo, WaterTracker } from "../../widgets";
import { useState } from "react";

const Home = () => {
  const [waterIntake, setWaterIntake] = useState(0);
  return (
    <div className="home-container">
      <Button className="button-surface">Click me</Button>
      <NutritionInfo />
      <WaterTracker setWaterIntake={setWaterIntake} waterIntake={waterIntake}/>
    </div>
  );
};
export default Home;
