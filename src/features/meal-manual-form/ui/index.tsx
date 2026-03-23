import './styles.css'
import { useForm, type SubmitHandler } from 'react-hook-form'
import type { MealType } from '@/entities/meal'
import { InputField } from '@/shared/ui'

const MealManualForm = () => {
	const { register, handleSubmit } = useForm<MealType>()

  const onSubmit: SubmitHandler<MealType> = data => {
		console.log('Готово для відправки:', data)
	}

	return (
		<form className='meal-manual-form' onSubmit={handleSubmit(onSubmit)}>
			<InputField
				{...register('name')}
				label='Назва'
				placeholder='Введите нащву страви'
			/>
			<InputField
				{...register('description')}
				label='Опис'
				placeholder='Введите опис страви'
			/>
		</form>
	)
}

export default MealManualForm
