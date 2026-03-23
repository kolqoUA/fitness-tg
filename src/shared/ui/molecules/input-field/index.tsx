import { forwardRef, type InputHTMLAttributes } from 'react'
import { Input } from '@/shared/ui' 
import './styles.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string
}

const InputField = forwardRef<HTMLInputElement, Props>(
	({ label, ...rest }, ref) => {
		return (
			<div className='input-field'>
				<label className='input-label'>{label}</label>
				<Input ref={ref} {...rest} />
			</div>
		)
	},
)

InputField.displayName = 'InputField'

export default InputField
