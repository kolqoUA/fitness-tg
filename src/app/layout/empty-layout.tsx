import './styles.css'

import { Outlet } from 'react-router-dom'

export const EmptyLayout = () => {
	return (
		<div className='empty_layout'>
			<Outlet />
		</div>
	)
}
