import React from 'react'

export default function Contact() {
    return (
        <div className='contact'>
            <section className="contact-form text-gray-700 body-font relative">
                <div className="flex md:flex-row sm:flex-col max-sm:flex-col justify-center align-center px-5 py-5 mx-auto">
                    <div className="flex flex-col text-center justify-center align-center mb-12">
                        <h1 className="sm:text-7xl text-6xl font-medium title-font mb-4 text-white">
                            Contact Us
                        </h1>
                        <a className="green-color text-2xl">info@afrowaveto.com</a>
                        <p className="leading-normal text-xl text-black my-2">
                            401 Richmond St W #230,
                            <br />
                            Toronto, ON M5V 3A8
                        </p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 md:px-20 sm:px-10">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="name" className="leading-7 text-sm text-white">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label
                                        for="email"
                                        className="leading-7 text-sm text-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label
                                        for="message"
                                        className="leading-7 text-sm text-white"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white afrowave-color-bg border-0 py-2 px-8 focus:outline-none rounded text-lg">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}
