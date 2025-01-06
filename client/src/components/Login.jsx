import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { userDetails } from '../store/counterSlice';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        setSuccess(false);

        try {
            const response = await axios.post('http://localhost:8080/api/v1/login', formData)
            if (response.data.success) {
                dispatch(userDetails(response.data.result))
                localStorage.setItem('email', response.data.result[0].email)

                alert(response.data.message)
                setTimeout(() => {
                    window.location.href = '/dashboard'
                }, 1000);
            } else {
                alert(response.data.message)
            }

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500">

            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 text-center">Welcome Back</h2>
                <p className="text-sm text-gray-600 text-center mb-8">
                    Please log in to your account
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-gray-800"
                            >
                                Remember me
                            </label>
                        </div>
                        <Link
                            href="#"
                            className="text-sm text-indigo-600 hover:text-indigo-500"
                        >
                            Forgot password?
                        </Link>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg mt-6 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300"
                        disabled={loading}
                    >
                        {loading ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>
                {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
                {success && (
                    <p className="text-green-500 text-sm mt-4">Login successful!</p>
                )}
                <p onClick={()=>navigate('/')} className="text-sm text-gray-600 flex  items-center gap-2 mt-4 cursor-pointer">
                    <FaLongArrowAltLeft className='text-xl'  /> Go Back
                </p>
            </div>
        </div>
    );
};

export default Login;
