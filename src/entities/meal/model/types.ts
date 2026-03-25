export interface MealType {
	id: number
	name: string
	description: string
	calories: number
	proteins: number
	fats: number
	carbohydrates: number
	image: string
}

export type CreateMealDto = Omit<MealType, "id">;
