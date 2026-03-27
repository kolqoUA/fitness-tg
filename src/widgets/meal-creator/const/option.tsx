import type { ChooseOptionType } from "@/shared/ui";
import { PencilLineIcon, RobotIcon, BarcodeIcon } from "@phosphor-icons/react";



export const MEAL_CREATION_OPTIONS: ChooseOptionType[] = [
  { value: "manual", label: "Вручну", icon: <PencilLineIcon size={18} weight="fill"/> },
  { value: "ai", label: "ШІ", icon: <RobotIcon size={18} weight="fill" /> },
  { value: "barcode", label: "Штрих-код", icon: <BarcodeIcon size={18} weight="fill"/> },
];
