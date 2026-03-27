import "./styles.css";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { MealType, CreateMealDto } from "@/entities/meal";
import { Button, ImageUploader } from "@/shared/ui";
import { MealInfo } from "./meal-info";

type MealAIParserType = Pick<MealType, "image">;

const MealAiParser = () => {
  const { register, handleSubmit } = useForm<MealAIParserType>();

  const onSubmit: SubmitHandler<MealAIParserType> = (data) => {
    console.log("Готово для відправки:", data);
  };

  const meal: CreateMealDto = {
    name: "Вівсянка з ягодами та горіхами",
    description:
      "Корисний сніданок, багатий на складні вуглеводи, клітковину та вітаміни.",
    calories: 350,
    proteins: 12,
    fats: 10,
    carbohydrates: 55,
    image: "https://example.com/oatmeal.jpg",
  };

  return (
    <form className="meal-manual-form" onSubmit={handleSubmit(onSubmit)}>
      <ImageUploader {...register("image")} />
      <MealInfo meal={meal} />
      <Button className="button-primary">Добавити</Button>
    </form>
  );
};

export default MealAiParser;
