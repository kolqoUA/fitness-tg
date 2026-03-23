import type { ChooseOptionType } from '@/shared/ui' 

export const MEAL_CREATION_OPTIONS: ChooseOptionType[] = [
	{ value: 'manual', label: 'Вручну' },
	{ value: 'ai', label: 'ШІ' },
	{ value: 'barcode', label: 'Штрих-код' },
]