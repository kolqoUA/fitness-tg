import './styles.css'

import { WriteIcon } from '../assets'
import { Meal, type MealType } from '@/entities/meal'
import { useNavigate } from 'react-router-dom'

interface ContentProps {
	meals: MealType[]
}

interface Props {
	meals: MealType[]
}

const Content = (props: ContentProps) => {
	if (props.meals.length === 0) {
		return (
			<div className='empty-state'>
				<p>Почніть стежити за раціоном — додайте сніданок або обід.</p>
			</div>
		)
	}

	return (
		<div className='meals-list'>
      {props.meals.map((meal, index) => (
        <Meal key={index} data={meal} />
      ))}
		</div>
	)
}

const MealTracker = (props: Props) => {
  const navigate = useNavigate();

	return (
		<div className='meal-tracker'>
			<div className='header'>
				<p>Страви</p>
				<div className='icon-box' onClick={() => navigate(`/meal-form`)}>
					<WriteIcon />
				</div>
			</div>
			<Content meals={props.meals} />
		</div>
	)
}

export default MealTracker
