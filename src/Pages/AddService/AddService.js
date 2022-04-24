import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();

    const [loading, setLoading] = useState(false);



    const onSubmit = data => {
        console.log(data);
        setLoading(true);
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.acknowledged) {
                    setLoading(false);
                }

            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h1>This is add Service data</h1>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Service Name'  {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='Description' className='my-4' {...register("description")} />
                <input placeholder='Price' type="number" {...register("price")} />
                <input placeholder='Photo URL' type="text" {...register("img")} />

                {
                    loading ? <div className="spinner-grow mx-auto mt-4" role="status">

                    </div> : <input className='mt-4' type="submit" />
                }

            </form>
        </div>
    );
};

export default AddService;