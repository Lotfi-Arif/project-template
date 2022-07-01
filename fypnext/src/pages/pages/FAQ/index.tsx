import Navbar from "src/components/Navbar/MainNavbar";

const FAQ = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100">
                <div className="container mx-auto">
                    <div role="article" className="bg-gray-100 py-12 md:px-8">
                        <div className="px-4 xl:px-0 py-10">
                            <div className="flex flex-col lg:flex-row flex-wrap">
                                <div className="mt-4 lg:mt-0 lg:w-3/5">
                                    <div>
                                        <h1 className="text-3xl ml-2 lg:ml-0 lg:text-4xl font-bold text-gray-900 tracking-normal lg:w-11/12">Frequently asked questions</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-6 xl:px-0">
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8">
                                <div role="cell" className="bg-gray-100">
                                    <div className="bg-white p-5 rounded-md relative h-full w-full">
                                        {/* <!-- className="absolute inset-0 object-center object-cover h-full w-full"  --> */}
                                        <span><img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/27R6nk5/home-1.png" alt="home-1" /></span>
                                        <h1 className="pb-4 text-2xl font-semibold">Account Overview</h1>
                                        <div className="my-5">
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full space-x-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                                <h4 className="text-md text-gray-900 ">First time, what do I do next?</h4>
                                            </div>
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full space-x-3">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900 ">Changing you profile picture and other information</h4>
                                            </div>
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">I didnt get a confirmation email, what should I do next</h4>
                                            </div>
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">What is the refund policy if I have to cancel during the month</h4>
                                            </div>
                                        </div>
                                        <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="javascript:void(0)">
                                            <p>Show All</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                    <line x1="15" y1="16" x2="19" y2="12" />
                                                    <line x1="15" y1="8" x2="19" y2="12" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div role="cell" className="bg-gray-100">
                                    <div className="bg-white p-5 rounded-md relative h-full w-full">
                                        {/* <!-- className="absolute inset-0 object-center object-cover h-full w-full"  --> */}
                                        <span><img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/bdGyLYk/pricetags-1.png" alt="pricetags-1" /></span>
                                        <h1 className="pb-4 text-2xl font-semibold">Subscription Plans</h1>
                                        <div className="my-5">
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">First time, what do I do next?</h4>
                                            </div>
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">Changing you profile picture and other information</h4>
                                            </div>
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">I didnt get a confirmation email, what should I do next</h4>
                                            </div>
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">What is the refund policy if I have to cancel during the month</h4>
                                            </div>
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">What is the refund policy?</h4>
                                            </div>
                                        </div>
                                        <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="javascript:void(0)">
                                            <p>Show All</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                    <line x1="15" y1="16" x2="19" y2="12" />
                                                    <line x1="15" y1="8" x2="19" y2="12" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div role="cell" className="bg-gray-100">
                                    <div className="bg-white p-5 rounded-md relative h-full w-full">
                                        {/* <!-- className="absolute inset-0 object-center object-cover h-full w-full"  --> */}
                                        <span><img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/GT4KHvJ/card-1.png" alt="home-1" /></span>
                                        <h1 className="pb-4 text-2xl font-semibold">Payment Options</h1>
                                        <div className="my-5">
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">First time, what do I do next?</h4>
                                            </div>
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">Changing you profile picture and other information</h4>
                                            </div>
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">I didnt get a confirmation email, what should I do next</h4>
                                            </div>
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">What is the refund policy if I have to cancel during the month</h4>
                                            </div>
                                        </div>
                                        <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="javascript:void(0)">
                                            <p>Show All</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                    <line x1="15" y1="16" x2="19" y2="12" />
                                                    <line x1="15" y1="8" x2="19" y2="12" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div role="cell" className="bg-gray-100">
                                    <div className="bg-white p-5 rounded-md h-full relative w-full">
                                        {/* <!-- className="absolute inset-0 object-center object-cover h-full w-full"  --> */}
                                        <span><img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/rG4r6NJ/notifications-1.png" alt="home-1" /></span>
                                        <h1 className="pb-4 text-2xl font-semibold">Notification Settings</h1>
                                        <div className="my-5">
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">First time, what do I do next?</h4>
                                            </div>
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">Changing you profile picture and other information</h4>
                                            </div>
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">I didnt get a confirmation email, what should I do next</h4>
                                            </div>
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">What is the refund policy if I have to cancel during the month</h4>
                                            </div>
                                        </div>
                                        <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="javascript:void(0)">
                                            <p>Show All</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                    <line x1="15" y1="16" x2="19" y2="12" />
                                                    <line x1="15" y1="8" x2="19" y2="12" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div role="cell" className="bg-gray-100">
                                    <div className="relative bg-white p-5 rounded-md relative h-full w-full">
                                        {/* <!-- className="absolute inset-0 object-center object-cover h-full w-full"  --> */}
                                        <span><img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/HFC1hqn/people-1.png" alt="home-1" /></span>
                                        <h1 className="pb-4 text-2xl font-semibold">Profile Preferences</h1>
                                        <div className="my-5">
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">First time, what do I do next?</h4>
                                            </div>
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">Changing you profile picture and other information</h4>
                                            </div>
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">I didnt get a confirmation email, what should I do next</h4>
                                            </div>
                                        </div>
                                        <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="javascript:void(0)">
                                            <p>Show All</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                    <line x1="15" y1="16" x2="19" y2="12" />
                                                    <line x1="15" y1="8" x2="19" y2="12" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div role="cell" className="bg-gray-100">
                                    <div className="relative bg-white p-5 rounded-md  h-full w-full">
                                        {/* <!-- className="absolute inset-0 object-center object-cover h-full w-full"  --> */}
                                        <span><img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/QX80fYm/lock-closed-1.png" alt="home-1" /></span>
                                        <h1 className="pb-4 text-2xl font-semibold">Privacy and Cookies</h1>
                                        <div className="my-5">
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">First time, what do I do next?</h4>
                                            </div>
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">Changing you profile picture and other information</h4>
                                            </div>
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">I didnt get a confirmation email, what should I do next</h4>
                                            </div>
                                            <div className="flex items-center pb-4 border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">What is the refund policy if I have to cancel during the month</h4>
                                            </div>
                                        </div>
                                        <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="javascript:void(0)">
                                            <p>Show All</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                    <line x1="15" y1="16" x2="19" y2="12" />
                                                    <line x1="15" y1="8" x2="19" y2="12" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FAQ;