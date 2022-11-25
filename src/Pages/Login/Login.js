import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);

    // console.log(watch("example"));
    
    // const { isLoading, isError, data, error } = useQuery({
    //     queryKey: ['todos'],
    //     queryFn: <h1></h1>
    //   })
    
    //   if (isLoading) {
    //     return <span>Loading...</span>
    //   }
    
    //   if (isError) {
    //     return <span>Error: {error.message}</span>
    //   }

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-5 shadow-2xl bg-slate-100'>
                <h2 className="text-3xl">Login Now</h2>
                <form onSubmit={handleSubmit((handleLogin))}>
                <div className="form-control w-full max-w-xs my-2">
                    <label className="label"><span className="label-text">Email:</span></label>
                    <input type="email" {...register("email")} className="input input-bordered w-full max-w-xs" placeholder="Enter your email" />
                </div>
                <div className="form-control w-full max-w-xs my-2">
                    <label className="label"><span className="label-text">Password:</span></label>
                    <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs" placeholder="Enter your password" />
                </div>
                <select className="select select-bordered w-full max-w-xs my-2" {...register("category", { required: true })}>
                    <option selected>User</option>
                    <option>Seller</option>
                </select>
                {/* <p>{data}</p> */}
                <div className='w-full text-center'>
                    <input className="btn btn-info my-2 w-4/5" type="submit" />
                    <p className="font-semibold">New to Outdoor Furniture? <Link className='text-info' to='/signUp'>Create new account</Link></p>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                    </div>
                    <button className="btn btn-outline btn-info w-4/5 my-2">Login With Google</button>
                </div>
                </form>
            </div>
        </div>
    );
};

export default Login;