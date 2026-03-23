import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { GlobalLayout, MainLayout } from './layout'

const Main = lazy(() =>
	import('../pages/main').then(module => ({ default: module.Main })),
)
const MainMealForm = lazy(() =>
	import('../pages/main-meal-form').then(module => ({
		default: module.MainMealForm,
	})),
)
const Statistics = lazy(() =>
	import('../pages/statistics').then(module => ({
		default: module.Statistics,
	})),
)
const Profile = lazy(() =>
	import('../pages/profile').then(module => ({ default: module.Profile })),
)
const Settings = lazy(() =>
	import('../pages/settings').then(module => ({ default: module.Settings })),
)

const PageLoader = () => (
	<div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
		Завантаження сторінки...
	</div>
)

const router = createBrowserRouter([
	{
		element: <GlobalLayout />,
		children: [
			{
				element: <MainLayout />,
				children: [
					{
						path: '/',
						element: (
							<Suspense fallback={<PageLoader />}>
								<Main />
							</Suspense>
						),
					},
					{
						path: '/statistics',
						element: (
							<Suspense fallback={<PageLoader />}>
								<Statistics />
							</Suspense>
						),
					},
					{
						path: '/profile',
						element: (
							<Suspense fallback={<PageLoader />}>
								<Profile />
							</Suspense>
						),
					},
					{
						path: '/settings',
						element: (
							<Suspense fallback={<PageLoader />}>
								<Settings />
							</Suspense>
						),
					},
				],
			},
			{
				path: '/meal-form',
				element: (
					<Suspense fallback={<PageLoader />}>
						<MainMealForm />
					</Suspense>
				),
			},
		],
	},
])

export default router
