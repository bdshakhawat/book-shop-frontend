import { useFormContext } from "react-hook-form";
type TProps = {
  options: string[];
  label: string;
  name: string;
};

const CoustomRadioSelect = ({ options, label, name }: TProps) => {
  const { register,  } = useFormContext();
  return (
    <div>
      <label className="block text-xl font-medium mb-1">{label}</label>
      <div className="w-full border border-gray-400 mb-4"></div>
      <div className="space-y-1">
        {options.map((option) => (
          <label key={option} className="flex items-center">
            <input type="radio" value={option} {...register(name)} />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CoustomRadioSelect;
