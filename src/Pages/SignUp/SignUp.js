import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, signinWithGoogle, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
        navigate('/');
    }
    
    const handleGoogleSubmit = () => {
        signinWithGoogle()
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            console.log(user);
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            console.log(errorCode, errorMessage, email);
        });
    }
    const handleSignUp = (data) => {
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                // Signed in 
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error, errorCode, errorMessage)
                setSignUPError(error.message)
            });
    }

    const saveUser = (name, email) =>{
        const user ={name, email};
        fetch('https://doctors-portal-server-rust.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            setCreatedUserEmail(email);
        })
    }

    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 p-5 shadow-2xl bg-slate-100'>
                <h2 className="text-3xl text-center">Sign Up Now</h2>
                <form onSubmit={handleSubmit((handleSignUp))}>
                <div className="form-control w-full max-w-xs my-2">
                    <label className="label"><span className="label-text">Write your name:</span></label>
                    <input type="text" {...register("name", {required: "Name is Required"})} className="input input-bordered w-full max-w-xs" placeholder="Enter your name" />
                </div>
                <div className="form-control w-full max-w-xs my-2">
                    <label className="label"><span className="label-text">Email:</span></label>
                    <input type="email" {...register("email", {required: "Email is Required"})} className="input input-bordered w-full max-w-xs" placeholder="Enter your email" />
                </div>
                <div className="form-control w-full max-w-xs my-2">
                    <label className="label"><span className="label-text">Password:</span></label>
                    <input type="password" {...register("password", {required: "Password is Required"})} className="input input-bordered w-full max-w-xs" placeholder="Enter your password" />
                </div>
                <select className="select select-bordered w-full max-w-xs my-2" {...register("category", { required: true })}>
                    <option selected>User</option>
                    <option>Seller</option>
                </select>
                {/* <p>{data}</p> */}
                <div className='w-full text-center'>
                    <input className="btn btn-info my-2 w-4/5" type="submit" />
                    <p className="font-semibold">Already have an account? <Link className='text-info' to='/login'>Please Login</Link></p>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                    </div>
                    <button onClick={handleGoogleSubmit} className="btn btn-outline btn-info w-4/5 my-2">Sign Up With Google</button>
                </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;