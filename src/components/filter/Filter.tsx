/* eslint-disable @typescript-eslint/no-explicit-any */

import { FormProvider, useForm } from "react-hook-form";
import CoustomRadioSelect from "../CustomForm/CoustomRadioSelect";
import { books } from "../../Pages/Books/All Books/books";
import CustomInput from "../CustomForm/CustomInput";

const category = [...new Set(books.map((book) => book.category))];
category.unshift("All");
const author = [...new Set(books.map((book) => book.author))];
author.unshift("All");

const Filter = ({ setShowFilter,showFilter }: any) => {
  const methods = useForm({
    defaultValues: {
      min: 0,
      max: 100000,
      availability: "in stock",
      category: "All",
      author: "All",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold mb-5">Filter by</h1>
        <p onClick={()=>setShowFilter(!showFilter)} className="text-2xl mb-5 mr-3 lg:hidden">x</p>
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
            options={["in stock", "out of stock"]}
            label="Availability"
            name="availability"
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
