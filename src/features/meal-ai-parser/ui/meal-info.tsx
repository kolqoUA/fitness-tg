import './meal-info.css'

import { type CreateMealDto } from '@/entities/meal'
import { NutritionTile } from '@/shared/ui'

interface Props {
  meal: CreateMealDto
}

export const MealInfo = (props: Props) => {
  return (
    <div className='meal-info'>
      <div className='meal-info__header'>
        <p className='meal-info__name'>{props.meal.name}</p>
        <p className='meal-info__description'>{props.meal.description}</p>
      </div>
      <div className='meal-info__nutritions'>
        <NutritionTile value={props.meal.calories} name='ккал' color='var(--theme-calories-color)'/>
        <NutritionTile value={props.meal.proteins} name='білки' color='var(--theme-proteins-color)'/>
        <NutritionTile value={props.meal.fats} name='жири' color='var(--theme-fats-color)'/>
        <NutritionTile value={props.meal.carbohydrates} name='вуглеводи' color='var(--theme-carb-color)'/>
      </div>
    </div>
  )
}