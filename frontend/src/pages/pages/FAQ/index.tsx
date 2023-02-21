import Navbar from "src/components/Navbar/MainNavbar";

const FAQ = () => {
    return (
        <>
            <Navbar />
            <div id="services" className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
                <div className="container xl:max-w-6xl mx-auto px-4">
                    <div className="flex flex-wrap flex-row -mx-4 text-center">
                        <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" >
                            {/* <!-- service block --> */}
                            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <div className="inline-block text-gray-900 mb-4">
                                    {/* <!-- icon --> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">SEO Services</h3>
                                <p className="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
                            </div>
                            {/* <!-- end service block --> */}
                        </div>
                    </div>
                    {/* <!-- end row --> */}
                </div>
            </div>
        </>
    );
}

export default FAQ;