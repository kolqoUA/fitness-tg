import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const MAIN_TAB_PATHS = ['/', '/statistics', '/profile', '/settings']

const useTelegramBackButton = () => {
	const navigate = useNavigate()
	const location = useLocation()

	const tg = (window as any).Telegram?.WebApp

	useEffect(() => {
		if (!tg.BackButton) return
		const isMainTab = MAIN_TAB_PATHS.includes(location.pathname)

		if (isMainTab) {
			tg.BackButton.hide()
		} else {
			tg.BackButton.show()
		}
	}, [location.pathname])

	useEffect(() => {
		if (!tg.BackButton) return

		const handleBackClick = () => {
			if (location.key !== 'default') {
				navigate(-1)
			} else {
				navigate('/', { replace: true })
			}
		}

		tg.BackButton.onClick(handleBackClick)

		return () => {
			tg.BackButton.offClick(handleBackClick)
		}
	}, [navigate, location])
}

export default useTelegramBackButton
