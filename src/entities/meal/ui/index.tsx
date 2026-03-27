import "./styles.css";

import type { MealType } from "../";
import { ImageModal, NutritionTile } from "@/shared/ui";
import { useState } from "react";

interface Props {
  meal: MealType;
}

const Meal = (props: Props) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div className="meal">
        <div className="meal__info">
          <img
            src={props.meal.image}
            alt={props.meal.name}
            onClick={() => setIsZoomed(!isZoomed)}
          />
          <div className="meal__text">
            <p className="meal__name">{props.meal.name}</p>
            <p className="meal__description">{props.meal.description}</p>
          </div>
        </div>
        <div className="meal__nutritions">
          <NutritionTile
            value={`${props.meal.calories}`}
            name="калорій"
            color="var(--theme-calories-color)"
          />
          <NutritionTile
            value={`${props.meal.proteins}г`}
            name="білки"
            color="var(--theme-proteins-color)"
          />
          <NutritionTile
            value={`${props.meal.fats}г`}
            name="жири"
            color="var(--theme-fats-color)"
          />
          <NutritionTile
            value={`${props.meal.carbohydrates}г`}
            name="вуглеводи"
            color="var(--theme-carbs-color)"
          />
        </div>
      </div>
      <ImageModal
        image={props.meal.image}
        name={props.meal.name}
        isZoomed={isZoomed}
        setIsZoomed={setIsZoomed}
      />
    </>
  );
};

export default Meal;
