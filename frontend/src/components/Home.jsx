import React from 'react';
import { Link } from 'react-router';
const Home = () => {
    return (
        <div className="h-[50%] bg-gray-50 flex flex-col items-center justify-center px-4 bg-cover bg-center bg-[url('https://i.pinimg.com/736x/23/d9/af/23d9afc2fed65f373f006ad97e67a639.jpg')] bg-cover bg-center">
            <h1 className="text-4xl font-bold text-white mb-4">Welcome to Go-Blog</h1>
            <p className="text-lg text-white mb-8 text-center max-w-xl">
                Share your thoughts, read amazing stories, and connect with fellow bloggers. Start your blogging journey today!
            </p>
            <div className="flex space-x-4">
                <button className="px-6 py-2 bg-none border-white text-white rounded hover:bg-gray-500 transition">
                    <Link to='/read'>Explore Blogs</Link>
                </button>
            </div>
        </div>
    );
};

export default Home;