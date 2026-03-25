import { Outlet } from 'react-router-dom'

import { useTelegramBackButton } from '@/shared/lib'

export const GlobalLayout = () => {
  useTelegramBackButton()
	return (
		<>
			<Outlet />
		</>
	)
}
