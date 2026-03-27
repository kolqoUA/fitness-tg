import type { MealType } from "../";

const getMeals: () => MealType[] = () => {
  return [
    {
      id: "1",
      name: "Сніданок",
      description: "Омлет з овочами та тост з авокадо",
      calories: 350,
      proteins: 20,
      fats: 15,
      carbohydrates: 30,
      image:
        "https://fainemisto.com/media/uploads/2019/05/26/4fffc450-d2ac-4aed-86b5-01246c260526-min-645x800.jpg",
    },
    {
      id: "2",
      name: "Обід",
      description: "Курятина з овочами та рисом",
      calories: 500,
      proteins: 30,
      fats: 20,
      carbohydrates: 40,
      image:
        "https://fainemisto.com/media/uploads/2019/05/26/4fffc450-d2ac-4aed-86b5-01246c260526-min-645x800.jpg",
    },
  ];
};

export default getMeals;
