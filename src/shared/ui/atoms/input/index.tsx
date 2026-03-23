import { forwardRef, type InputHTMLAttributes } from 'react'
import './styles.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
	return (
		<input ref={ref} className='input' {...props} />
	)
})

Input.displayName = 'Input' // Допомагає при дебагу в React DevTools

export default Input
