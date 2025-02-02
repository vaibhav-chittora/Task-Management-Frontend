import React from "react";

function Signup() {
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
                    <h1 className="text-3xl font-extrabold mb-2">Create an account</h1>
                    <p className=" text-sm mb-8">Join us and start managing your tasks with ease.</p>
                </div>

                <form className="mt-8 space-y-6">
                    <div className="space-y-5">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium ">
                                Username
                            </label>
                            <input
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium ">
                                Email
                            </label>
                            <input
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium ">
                                Password
                            </label>
                            <input
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 cursor-pointer border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                    >
                        Sign up
                    </button>

                    <div className="text-center text-sm">
                        <span className="text-gray-400">Already have an account? </span>
                        <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                            Log in
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
