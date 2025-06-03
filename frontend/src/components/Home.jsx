import React from 'react';
import { Link } from 'react-router';
import { Spade } from 'lucide-react';
const Home = () => {
    return (
        <div className="relative flex flex-col justify-center items-center h-[80vh] bg-cover bg-center px-[15vw] py-[5vh] gap-[1vw] opacity-100 bg-[url('https://i.pinimg.com/736x/ec/b1/c0/ecb1c004134c01b49e44a7287f348707.jpg')]">
            {/* Overlay for darkening */}
            <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center">
                <h1 className="text-[#fff] font-bold text-center text-[4vw]">Welcome to Go Blog Out!</h1>
                <h2 className="text-[#fff] font-semibold text-center text-[2.5vw]">Blog out your thoughts, experiences, and dreams</h2>
                <p className="text-[#fff] font-medium text-center mt-[0.5vh] mb-[5vh]">
                    Share your thoughts, read amazing stories, and connect with fellow bloggers. Start your blogging journey today—where every story finds its voice!
                </p>
                <div className="flex space-x-4">
                    <button className="px-6 py-2 bg-[#463120] border-white text-white font-medium rounded hover:bg-[#795a40] transition">
                        <Link to='/docs'>Get Started</Link>
                    </button>
                    <button className="px-6 py-2 bg-white border-[#463120] text-[#463120] rounded font-medium hover:bg-[#795a40] transition">
                        <Link to='/read'>Explore Blogs</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;