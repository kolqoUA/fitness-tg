import "./styles.css";

import { CircularProgressBar, LabelProgressBar } from '@/shared/ui'

const NutritionInfo = () => {
  const calories = 836;
  return (
		<div className='user-nutrition-info'>
			<CircularProgressBar
				value={calories}
				size={100}
				tickness={20}
				max={2400}
				color={{
					primary: 'var(--theme-primary-color)',
					circleColor: 'var(--theme-surface-color)',
				}}
			>
				<div className='calories'>
					<p className='value'>{calories}</p>
					<p className='unit'>ккал</p>
				</div>
			</CircularProgressBar>
			<div className='user-progress-bars'>
				<LabelProgressBar
					name='Білки'
					color={{
						primary: 'var(--theme-proteins-color)',
						secondary: 'var(--theme-proteins-light-color)',
					}}
					min={0}
					max={180}
					value={180}
					unit='грам'
				/>
				<LabelProgressBar
					name='Жири'
					color={{
						primary: 'var(--theme-fats-color)',
						secondary: 'var(--theme-fats-light-color)',
					}}
					min={0}
					max={80}
					value={80}
					unit='грам'
				/>
				<LabelProgressBar
					name='Вуглеводи'
					color={{
						primary: 'var(--theme-carbs-color)',
						secondary: 'var(--theme-carbs-light-color)',
					}}
					min={0}
					max={408}
					value={408}
					unit='грам'
				/>
			</div>
		</div>
	)
};

export default NutritionInfo;
