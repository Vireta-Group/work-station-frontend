import React from "react";
import notFoundGif from "../../assets/logo/404.gif";

export default function NotFoundPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white p-6">
            <section className="max-w-3xl w-full text-center flex flex-col items-center">
                {/* GIF Animation */}
                <div className="w-80 h-80 mb-8">
                    <img src={notFoundGif} alt="Not Found Animation" className="w-full h-full object-contain" />
                </div>

                {/* 404 text */}
                <h1 className="text-6xl lg:text-8xl font-extrabold mb-4 animate-bounce">
                    404
                </h1>

                <p className="text-lg lg:text-xl text-white mb-6">
                    Oops! The page you’re looking for doesn’t exist.
                </p>

                {/* Back to Home Button */}
                <a
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition"
                >
                    Back to Home
                </a>
            </section>
        </main>
    );
}
