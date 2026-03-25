import './styles.css'

import type { MealType } from '../';
import { ImageModal, NutritionTile } from '@/shared/ui'
import { useState } from 'react';

interface Props {
	data: MealType
}

const Meal = (props: Props) => {
  const [isZoomed, setIsZoomed] = useState(false)

  return (
		<>
			<div className='meal'>
				<div className='meal__info'>
					<img
						src={props.data.image}
						alt={props.data.name}
						onClick={() => setIsZoomed(!isZoomed)}
					/>
					<div className='meal__text'>
						<p className='meal__name'>{props.data.name}</p>
						<p className='meal__description'>{props.data.description}</p>
					</div>
				</div>
				<div className='meal__nutritions'>
					<NutritionTile
						value={`${props.data.calories}`}
						name='калорій'
						color='var(--theme-calories-color)'
					/>
					<NutritionTile
						value={`${props.data.proteins}г`}
						name='білки'
						color='var(--theme-proteins-color)'
					/>
					<NutritionTile
						value={`${props.data.fats}г`}
						name='жири'
						color='var(--theme-fats-color)'
					/>
					<NutritionTile
						value={`${props.data.carbohydrates}г`}
						name='вуглеводи'
						color='var(--theme-carbs-color)'
					/>
				</div>
			</div>
			<ImageModal
				image={props.data.image}
				name={props.data.name}
				isZoomed={isZoomed}
				setIsZoomed={setIsZoomed}
			/>
		</>
	)
}


export default Meal;