import CustomForm from "../../components/CustomForm/CustomForm";
import { Button } from "antd";
import CustomInput from "../../components/CustomForm/CustomInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomSelect from "../../components/CustomForm/CustomSelect";
import { CategoryOptions } from "../../Constants/constants";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useUpdateProductMutation } from "../../Redux/Features/product/productApi";

const UpdateBook = () => {
    const navigate = useNavigate()
  const { id } = useParams()
  const [updateBook] = useUpdateProductMutation(undefined);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Updating book...");
    // const custommizedData = {
    //   title: "The Great Gatsby",
    //   description: "A story of the Great Gatsby",
    //   price: 100,
    //   quantity: 10,
    //   author: "F. Scott Fitzgerald",
    //   category: "Fiction",
    // };

//     const { data: response } = await updateBook({ id, data });
//    console.log(response)
   

   
    try {
      const { data: response } = await updateBook({ id, data} );
      if (response?.success) {
        toast.success("Book updated successfully", { id: toastId });
        navigate('/admin/dashboard')
      } else {
        toast.error("Failed to update book", { id: toastId });
      }
      console.log(response);
    } catch (error) {
      toast.error("Failed to update book", { id: toastId });
      console.log(error);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-center items-center   p-6"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Update Book Information📚
        </h2>
        <CustomForm onSubmit={onSubmit} className="space-y-6">
          <CustomInput name="title" placeholder="Title" type="text" />
          <CustomInput
            name="description"
            placeholder="Description"
            type="text"
          />
          <CustomInput name="price" placeholder="Price" type="number" />
          <CustomInput
            name="quantity"
            placeholder="Quantity"
            type="number"
          />
          <CustomInput name="author" placeholder="Author" type="text" />
          <CustomSelect
            name="category"
            label="Category"
            options={CategoryOptions}
          />

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              htmlType="submit"
              className="custom-btn"
              style={{ width: "100%" }}
            >
              Update Book
            </Button>
          </motion.div>
        </CustomForm>
      </motion.div>
    </motion.div>
  );
};

export default UpdateBook;