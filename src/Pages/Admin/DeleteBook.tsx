// import CustomForm from "../../components/CustomForm/CustomForm";
// import { Button } from "antd";
// // import CustomInput from "../../components/CustomForm/CustomInput";
// import { FieldValues, SubmitHandler } from "react-hook-form";
// import CustomSelect from "../../components/CustomForm/CustomSelect";
// import { CategoryOptions } from "../../Constants/constants";
// import { useNavigate, useParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { toast } from "sonner";
// // import { useUpdateProductMutation } from "../../Redux/Features/Admin/UserManagementApi/bookManagement.api";

// const UpdateBook = () => {
//     const navigate = useNavigate()
//   const { id } = useParams()
// //   const [updateBook] = useUpdateProductMutation(undefined);
//   const onSubmit: SubmitHandler<FieldValues> = async (data) => {
//     const toastId = toast.loading("Updating book...");
    
   
//     try {
//       const { data: response } = await delete({ id, data} );
//       if (response?.success) {
//         toast.success("Book deleted successfully", { id: toastId });
//         navigate('/admin/dashboard')
//       } else {
//         toast.error("Failed to update book", { id: toastId });
//       }
//       console.log(response);
//     } catch (error) {
//       toast.error("Failed to update book", { id: toastId });
//       console.log(error);
//     }
//   };
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="flex justify-center items-center   p-6"
//     >
//       <motion.div
//         initial={{ scale: 0.9 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 0.4, ease: "easeInOut" }}
//         className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Delete Book Information📚
//         </h2>
//         <CustomForm onSubmit={onSubmit} className="space-y-6">
          

//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Button
//               htmlType="submit"
//               className="custom-btn"
//               style={{ width: "100%" }}
//             >
//               Delete Book
//             </Button>
//           </motion.div>
//         </CustomForm>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default UpdateBook;
