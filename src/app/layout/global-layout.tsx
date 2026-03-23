import { Outlet } from 'react-router-dom'

import { useTelegramBackButton } from '@/shared/lib'

const GlobalLayout = () => {
  useTelegramBackButton()
	return (
		<>
			<Outlet />
		</>
	)
}

export default GlobalLayout
