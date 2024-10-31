import React, { useState } from 'react';
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import useSignUp from '../../hooks/useSignUp.js';
import toast from 'react-hot-toast';

const Signup = () => {
    const { loading, signup } = useSignUp();

    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }
    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(inputs);
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up <span className='text-blue-500'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input name='fullName' onChange={handleChange} type='text' placeholder='Mayank Kumar' className='w-full input input-bordered  h-10' />
                    </div>

                    <div>
                        <label className='label p-2 '>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input name='username' onChange={handleChange} type='text' placeholder='mayank' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            name='password'
                            onChange={handleChange}
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input
                            name='confirmPassword'
                            onChange={handleChange}
                            type='password'
                            placeholder='Confirm Password'
                            className='w-full input input-bordered h-10'
                        />
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' to={"/login"}>
                        Already have an account?
                    </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup