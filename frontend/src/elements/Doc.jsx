import React from "react";

const Doc = () => (
    <div className="max-w-full my-5 p-10 font-sans bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-[#463120] mb-3 drop-shadow">
            Welcome to Go Blog Out!
        </h1>
        <p className="text-xl text-gray-800 mb-5">
            <strong>Go-Blog</strong> is your launchpad to share ideas, stories, and inspiration with the world. Whether you’re a first-time writer or a seasoned storyteller, Go-Blog makes blogging <span className="text-[#795a40] font-semibold">fun</span>, <span className="text-[#795a40] font-semibold">fast</span>, and <span className="text-[#795a40] font-semibold">frictionless</span>!
        </p>
        <hr className="my-6 border-[#795a40]" />
        <section>
            <h2 className="text-2xl font-bold text-[#463120] mb-2">How It Works</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-900">
                <li>
                    <strong>Explore:</strong> Dive into fresh posts from creative minds on the Home Page.
                </li>
                <li>
                    <strong>Write Instantly:</strong> Hit <em>Post Blogs</em>, pour out your thoughts, and publish with a single click.
                </li>
                <li>
                    <strong>Read &amp; Discover:</strong> Enjoy stories in a clean, distraction-free space.
                </li>
                <li>
                    <strong>Mobile Magic:</strong> Blog anywhere, anytime—on your phone, tablet, or desktop.
                </li>
            </ol>
        </section>
        <section className="mt-8">
            <h2 className="text-2xl font-bold text-[#463120] mb-2">Why Go-Blog?</h2>
            <ul className="list-disc ml-6 space-y-1 text-gray-900">
                <li><strong>Zero Learning Curve:</strong> Start writing instantly—no tech skills needed.</li>
                <li><strong>Lightning Fast:</strong> Create and share in seconds.</li>
                <li><strong>Modern &amp; Intuitive:</strong> Sleek design for effortless navigation.</li>
                <li><strong>Safe &amp; Secure:</strong> Your words, your control—always.</li>
            </ul>
        </section>
        <div className="mt-10">
            <h3 className="text-xl font-bold text-[#463120] mb-2">Ready to share your voice?</h3>
            <p>
                <a
                    href="/"
                    className="inline-block bg-gradient-to-r from-[#463120] to-[#795a40] text-white px-10 py-3 rounded-lg font-bold text-lg shadow hover:from-[#795a40] hover:to-[#463120] transition"
                >
                    Start Blogging Now &rarr;
                </a>
            </p>
        </div>
    </div>
);

export default Doc;