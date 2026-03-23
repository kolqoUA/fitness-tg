import './styles.css'

import { useState, type JSX } from 'react'

import { MealAIParser } from '@/features/meal-ai-parser'
import { MealBarcodeScanner } from '@/features/meal-barcode-scanner'
import { MealManualForm } from '@/features/meal-manual-form'
import { ChooseOption } from '@/shared/ui'

import { MEAL_CREATION_OPTIONS } from '../const/option'

const MealCreator = () => {
	const [currentOption, setCurrentOption] = useState(
		MEAL_CREATION_OPTIONS[0].value,
	)

  const contentMap: Record<string, JSX.Element> = {
		manual: <MealManualForm />,
		ai: <MealAIParser />,
		barcode: <MealBarcodeScanner />,
	}

	return (
		<div className='meal-creator'>
			<ChooseOption
				options={MEAL_CREATION_OPTIONS}
				currentOption={currentOption}
				onClick={setCurrentOption}
			/>
			{contentMap[currentOption]}
		</div>
	)
}

export default MealCreator
