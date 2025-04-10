import { useFormContext } from "react-hook-form";

type TProps = {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
};

const CustomInput = ({ label, name, type, placeholder }: TProps) => {
  const { register } = useFormContext();

  return (
    <div className="space-y-1">
      <label className="block font-medium">
        {label?label:''}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default CustomInput;
