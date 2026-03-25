import { forwardRef, type InputHTMLAttributes } from 'react'
import './styles.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, Props>(({color, ...rest}, ref) => {
	return (
		<input ref={ref} className='input-tile' {...rest} style={{color: color}}/>
	)
})

Input.displayName = 'Input'
export default Input
