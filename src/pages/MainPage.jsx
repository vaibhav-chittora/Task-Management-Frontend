import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate()
    return (
        <div className="h-full flex flex-col items-center justify-center bg-gray-900 text-white p-6">
            {/* Main Heading Section */}
            <main className="text-center mt-16">
                <h2 className="text-4xl font-semibold">Manage Your Tasks Efficiently</h2>
                <p className="mt-4 text-gray-300 max-w-lg mx-auto">
                    A simple and intuitive task management app to help you stay organized
                    and productive.
                </p>
            </main>

            {/* Image Section */}
            <div className="mt-8">
                <img
                    src='https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdGl2aXR5fGVufDB8fDB8fHww'
                    alt="Task Management"
                    className="rounded-lg shadow-lg"
                />
            </div>

            {/* Buttons Section */}
            <div className="mt-8 flex space-x-4">
                <button
                    onClick={() => navigate("/login")}
                    className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md"
                >
                    Login
                </button>
                <button
                    onClick={() => navigate("/signup")}
                    className="bg-green-500 cursor-pointer hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md"
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default MainPage;
