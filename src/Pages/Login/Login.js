import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, signinWithGoogle } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const [token] = useToken(loginUserEmail);

    const from = location.state?.from?.pathname || '/';

    // if (token) {
    //     navigate(from, { replace: true });
    // }

    // const { register, handleSubmit } = useForm();
    // const [data, setData] = useState("");
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

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                // Signed in 
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                setLoginError(error.message);
        });
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-5 shadow-2xl bg-slate-100'>
                <h2 className="text-3xl text-center">Login Now</h2>
                <form onSubmit={handleSubmit((handleLogin))}>
                <div className="form-control w-full max-w-xs my-2">
                    <label className="label"><span className="label-text">Email:</span></label>
                        <input type="email" {...register("email")} className="input input-bordered w-full max-w-xs" placeholder="Enter your email" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs my-2">
                    <label className="label"><span className="label-text">Password:</span></label>
                        <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs" placeholder="Enter your password" />
                        {errors.email && <p className='text-red-600'>{errors.email?.password}</p>}
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
                    <button onClick={handleGoogleSubmit} className="btn btn-outline btn-info w-4/5 my-2">Login With Google</button>
                </div>
                <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;