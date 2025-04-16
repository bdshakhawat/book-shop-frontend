import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  className?: string;
};
const CustomForm = ({ children, onSubmit, className }: TFormProps) => {
  const methods = useForm();
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset();
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
};

export default CustomForm;