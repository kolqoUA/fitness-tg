import type { MealType } from "@/entities/meal";

export const fetchProductByBarcode = async (
  barcode: string,
): Promise<MealType | null> => {
  try {
    // Робимо запит до безкоштовного відкритого API
    const response = await fetch(
      `https://world.openfoodfacts.org/api/v2/product/${barcode}.json`,
    );

    if (!response.ok) {
      throw new Error("Помилка мережі");
    }

    const data = await response.json();

    if (data.status === 1 && data.product) {
      const p = data.product;
      const nutriments = p.nutriments || {};
      console.log(data)
      return {
        id: crypto.randomUUID(),
        name: p.product_name_uk || p.product_name || "Невідомий продукт",
        description: p.generic_name_uk || p.generic_name || "",
        calories: Math.round(nutriments["energy-kcal_100g"] || 0),
        proteins: Math.round(nutriments["proteins_100g"] || 0),
        fats: Math.round(nutriments["fat_100g"] || 0),
        carbohydrates: Math.round(nutriments["carbohydrates_100g"] || 0),
        image: p.image_front_url || p.image_url,
      };
    }

    return null;
  } catch (error) {
    console.error("Помилка при отриманні продукту:", error);
    return null;
  }
};
