import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../helpers/axiosInstance";
import { useDispatch } from "react-redux";
import { authActions } from '../redux/authSlice'
import toast from "react-hot-toast";

function Login() {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            if (data.email === "" || data.password === "") {
                toast.error("Please fill all the fields");
                return;
            }
            const response = await axiosInstance.post('/user/signin', data);

            localStorage.setItem('user', JSON.stringify(response.data.data.user.username));
            localStorage.setItem('email', JSON.stringify(response.data.data.user.email));
            console.log("Login User - ", response.data.data);

            localStorage.setItem('token', response.data.data.token);
            // console.log("Login Token - ", response.data.data.token);

            // alert('Login successful', response.data.message);
            toast.success('Successfully logged in ');

            setData({
                email: "",
                password: "",
            })
            dispatch(authActions.login());
            setTimeout(() => {
                navigate("/home/all-tasks");;
            }, 5000);


        } catch (error) {
            toast.error(`Error in login - ${error}`);
            console.log("Login error", error);
        }
    }

    return (
        <div className="h-screen flex items-center justify-center bg-slate-900 text-[#fff]  py-12 px-4 sm:px-6 lg:px-8">
            <div
                className="max-w-md w-full space-y-8 bg-slate-800  p-10 rounded-xl shadow-2xl 
            shadow-gray-900
            ">
                <div className="text-center">
                    {/* <Link to="/">
                        <FaArrowLeft className="text-2xl cursor-pointer" />
                    </Link> */}
                    <h1 className="text-3xl font-extrabold mb-2">
                        Login to your account
                    </h1>
                    <p className=" text-sm mb-8">
                        Welcome back! Please enter your details.
                    </p>
                </div>

                <form className="mt-8 space-y-6" >
                    <div className="space-y-5">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium ">
                                Email
                            </label>
                            <input
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                onChange={handleChange}
                                value={data.email}
                            />
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium ">
                                    Password
                                </label>
                            </div>
                            <input
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                onChange={handleChange}
                                value={data.password}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 cursor-pointer border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                        onClick={handleLogin}
                    >
                        Login
                    </button>

                    <div className="text-center text-sm">
                        <span className="text-gray-400">
                            Don't have an account?
                        </span>

                        <Link to="/signup" className="font-medium mx-2 text-blue-600 hover:text-blue-500">
                            Register Here
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
