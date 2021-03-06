import React from 'react'

function Welcome() {
    return (
        
        <div className="flex justify-center items-center mt-5">
            <div className="rounded overflow-hidden shadow-lg">
                <div className="flex justify-around bg-indigo-500 p-2 font-sans">
                    <span className="text-6xl text-white"><h1>M</h1></span>
                    <span className="text-6xl text-white"><h1>E</h1></span>
                    <span className="text-6xl text-white"><h1>R</h1></span>
                    <span className="text-6xl text-white"><h1>N</h1></span>
                </div>
                <div className="px-6 py-6 text-center">
                    <div className="font-bold text-2xl mb-2 text-blue-500 font-mono">Welcome To ( M E R N ) Stack 2020</div>
                    <img src="/imgs/logo.png" />
                    <p className="text-gray-700 text-base">
                        This is MERN Stack Starter Project Happy Coding :)
                    </p>
                </div>
                <div className="px-6 pt-6 pb-2 text-center">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MongoDB</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Express Js</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React Js</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Node Js</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TailwindCSS</span>
                </div>
            </div>
        </div>
        
    )
}

export default Welcome
