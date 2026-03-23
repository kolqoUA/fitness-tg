import './styles.css'

export interface ChooseOptionType {
	value: string
	label: string
}

interface Props {
	options: ChooseOptionType[]
	currentOption: string
	onClick: (value: string) => void
}

const ChooseOption = (props: Props) => {
	return (
		<div className='option-selector'>
			{props.options.map(option => (
				<div
					key={option.value}
					className={`option ${props.currentOption === option.value ? 'chosen' : ''}`}
					onClick={() => props.onClick(option.value)}
				>
					<p>{option.label}</p>
				</div>
			))}
		</div>
	)
}

export default ChooseOption
