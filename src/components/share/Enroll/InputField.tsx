import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  FieldErrors,
  UseFormRegister,
  FieldValues,
  Path,
} from "react-hook-form";

export interface InputFieldProps<T extends FieldValues> {
  id: Path<T>;
  label: string;
  isRequired?: boolean;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}

const InputField = <T extends FieldValues>({
  id,
  label,
  isRequired,
  register,
  errors,
}: InputFieldProps<T>) => {
  return (
    <div className="space-y-2">
      <Label>
        {label} {isRequired && <span className="text-red-500">*</span>}
      </Label>

      <Input type="text" className="rounded-full" {...register(id)} />

      {errors[id] && (
        <p className="text-red-500 text-sm">{errors[id]?.message as string}</p>
      )}
    </div>
  );
};

export default InputField;
