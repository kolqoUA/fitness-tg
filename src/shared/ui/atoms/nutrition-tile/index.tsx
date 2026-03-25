import './styles.css'

interface Props {
	value: string | number
	name: string
	color: string
}

const NutritionTile = (props: Props) => {
	return (
		<div className='nutrition-tile'>
			<p className='nutrition-tile__value' style={{ color: props.color }}>
				{props.value}
			</p>
			<p className='nutrition-tile__name'>{props.name}</p>
		</div>
	)
}

export default NutritionTile
