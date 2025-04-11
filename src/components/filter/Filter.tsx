/* eslint-disable @typescript-eslint/no-explicit-any */

import { FormProvider, useForm } from "react-hook-form";
import CoustomRadioSelect from "../CustomForm/CoustomRadioSelect";
import CustomInput from "../CustomForm/CustomInput";
import { useGetAllbooksQuery } from "../../Redux/Features/Admin/UserManagementApi/bookManagement.api";
import { TBook } from "../Card/BookCard";

const Filter = ({ setShowFilter, showFilter, setFilterParams }: any) => {

  const {data,isLoading} = useGetAllbooksQuery(undefined)

  const methods = useForm({
    defaultValues: {
      min: 0,
      max: 100000,
      inStock: "All",
      category: "All",
      author: "All",
    },
  });
  if(isLoading){
    return <p>loading ..</p>
  }
  const category = [...new Set(data?.data?.map((book:TBook) => book.category ))] as string[];
  category.unshift("All");
  const author = [...new Set(data?.data?.map((book: TBook) => book.author))] as string[];
  author.unshift("All");

 

  const onSubmit = (data: any) => {
    const filterObject: any = {};

    // Handle price range if it is not set to the default values
    // if (data.min !== 0 || data.max !== 100000) {
    //   filterObject.minPrice = data.min;
    //   filterObject.maxPrice = data.max;
    // }

    // Handle availability
    if (data.inStock !== "All") {
      filterObject.inStock = data.inStock === "in stock";
    }

    // Handle category and author filters
    if (data.category !== "All") {
      filterObject.category = data.category;
    }
    if (data.author !== "All") {
      filterObject.author = data.author;
    }

    const filterArray = Object.entries(filterObject).map(([key, value]) => ({
      name: key,
      value: value,
    }))
    // Pass the filter params to the parent component
    setFilterParams(filterArray);
  };
  return (
    <FormProvider {...methods}>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold mb-5">Filter by</h1>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="text-2xl mb-5 mr-3 lg:hidden"
        >
          x
        </p>
      </div>
      <form className="space-y-4" onChange={methods.handleSubmit(onSubmit)}>
        <div>
          <label className="block text-xl font-medium mb-1">Price Range</label>
          <div className="w-full border border-gray-400 mb-4"></div>
          <div className="flex items-center gap-6 justify-between">
            <CustomInput
              name="min"
              label="Min"
              type="number"
              placeholder="Min"
            />
            <CustomInput
              name="max"
              label="Max"
              type="number"
              placeholder="Max"
            />
          </div>
        </div>
        <div>
          <CoustomRadioSelect
            options={['All', "in stock", "out of stock"]}
            label="Availability"
            name="inStock"
          />
        </div>
        <div>
          <CoustomRadioSelect
            options={category} 
            label="Category"
            name="category"
          />
        </div>
        <div>
          <CoustomRadioSelect options={author} label="Author" name="author" />
        </div>
      </form>
    </FormProvider>
  );
};

export default Filter;
