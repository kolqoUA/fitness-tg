import "./styles.css";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { CreateMealDto } from "@/entities/meal";
import { ImageUploader, InputField, InputTile } from "@/shared/ui";

const MealManualForm = () => {

  const { register, handleSubmit } = useForm<CreateMealDto>();

  const onSubmit: SubmitHandler<CreateMealDto> = (data) => {
    console.log("Готово для відправки:", data);
  };

  return (
    <form className="meal-manual-form" onSubmit={handleSubmit(onSubmit)}>
      <ImageUploader {...register("image")} />
      <div className="input-box">
        <InputField
          {...register("name")}
          label="Назва"
          placeholder="Введіть назву страви"
        />
        <InputField
          {...register("description")}
          label="Опис"
          placeholder="Введіть опис страви"
        />
      </div>
      <div className="input-tile-box">
        <InputTile
          {...register("calories")}
          color="var(--theme-calories-color)"
          placeholder="Введіть калорії"
          type="number"
        />
        <InputTile
          {...register("proteins")}
          color="var(--theme-proteins-color)"
          placeholder="Введіть білки"
          type="number"
        />
        <InputTile
          {...register("fats")}
          color="var(--theme-fats-color)"
          placeholder="Введіть жири"
          type="number"
        />
        <InputTile
          {...register("carbohydrates")}
          color="var(--theme-carbs-color)"
          placeholder="Введіть вуглеводи"
          type="number"
        />
      </div>
      <button type="submit">Готово</button>
    </form>
  );
};

export default MealManualForm;
