import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='w-50 mx-auto'>
            <h1>This is add Service data</h1>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Service Name'  {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='Description' className='my-4' {...register("description")} />
                <input placeholder='Price' type="number" {...register("price")} />
                <input placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mt-4' type="submit" />
            </form>
        </div>
    );
};

export default AddService;