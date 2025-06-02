import React from 'react';
import { Link } from 'react-router';
import { Spade } from 'lucide-react';
const Home = () => {
    return (
        
        //<div className="flex flex-col justify-center items-center h-[80vh] bg-cover bg-center px-[15vw] py-[5vh] gap-[1vw] opacity-100 bg-[url('https://i.pinimg.com/736x/72/f0/b3/72f0b3aa5ee1edf4936a8ac89f09c3b9.jpg')]">
        <div className="flex flex-col justify-center items-center h-[80vh] bg-cover bg-center px-[15vw] py-[5vh] gap-[1vw] opacity-100 bg-[url('https://i.pinimg.com/736x/ec/b1/c0/ecb1c004134c01b49e44a7287f348707.jpg')]">
            <h1 className="text-[#fff] font-bold text-center text-[4vw]">Welcome to Go Blog Out!</h1>
            <h2 className="text-[#fff] font-semibold text-center text-[2.5vw]">Blog out your thoughts, experiences, and dreams</h2>
            <p className="text-[#fff] font-medium text-center mt-[0.5vh]">
                Share your thoughts, read amazing stories, and connect with fellow bloggers. Start your blogging journey today—where every story finds its voice!
            </p>
            <div className="flex space-x-4">
                <button className="px-6 py-2 bg-[#463120] border-white text-white font-medium rounded hover:bg-gray-500 transition">
                    <Link to='/read'>Get Started</Link>
                </button>
                <button className="px-6 py-2 bg-white border-[#463120] text-[#463120] rounded font-medium hover:bg-gray-500 transition">
                    <Link to='/read'>Explore Blogs</Link>
                </button>
            </div>
        </div>
    );
};

export default Home;