export interface DailyStatDto {
  date: string;
  calories: number;
  proteins: number;
  fats: number;
  carbs: number;
  water: number;
}

export type MetricType = "calories" | "water" | "proteins" | "fats" | "carbs";