import "./styles.css";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { MealType } from "@/entities/meal";
import { Button, ImageUploader } from "@/shared/ui";

type MealAIParserType = Pick<MealType, "image">;

const MealAiParser = () => {
  const { register, handleSubmit } = useForm<MealAIParserType>();

  const onSubmit: SubmitHandler<MealAIParserType> = (data) => {
    console.log("Готово для відправки:", data);
  };

  return (
    <form className="meal-manual-form" onSubmit={handleSubmit(onSubmit)}>
      <ImageUploader {...register("image")} />
      <Button className="button-primary">Згенерувати</Button>
    </form>
  );
};

export default MealAiParser;
