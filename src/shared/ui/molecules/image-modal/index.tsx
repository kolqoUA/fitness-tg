import './styles.css'

import { useState } from 'react'
import { createPortal } from 'react-dom'

interface Props {
	image: string
	name: string
	isZoomed: boolean
  setIsZoomed: (value: boolean) => void
}

const ImageModal = (props: Props) => {
  const [isClosing, setIsClosing] = useState(false)

  if (!props.isZoomed) return null

  const handleClose = () => {
		setIsClosing(true)

		setTimeout(() => {
			props.setIsZoomed(false) 
			setIsClosing(false)
		}, 300)
	}

	return createPortal(
		<div
			className={`image-modal ${isClosing ? 'closing' : ''}`}
			onClick={handleClose}
		>
			<img src={props.image} alt={props.name} />
		</div>,
		document.body
	)
}

export default ImageModal
