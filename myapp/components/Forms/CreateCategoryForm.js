// CreateCategoryForm.js
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { basicColors } from '@/lib/constants';
import { createCategory } from '@/lib/action';

const CreateCategoryForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const onSubmit = (data) => {
    createCategory(data); // Handle form submission here, e.g., send data to backend
  };

  useEffect(() => {
    setValue("name", "Example Name");
    setValue("color", "#FF0000");
  }, [setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" {...register("name", { required: true })} />
        {errors.name && <span>Name is required</span>}
      </div>
      <div>
        <label htmlFor="color">Color:</label>
        <select id="color" {...register("color", { required: true })}>
          <option value="">Select a color</option>
          {basicColors.map((color, index) => (
            <option key={index} value={color.value}>{color.label}</option>
          ))}
        </select>
        {errors.color && <span>Please select a color</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateCategoryForm;
