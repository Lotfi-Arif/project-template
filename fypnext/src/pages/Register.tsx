import Navbar from "src/navigation/horizontal";
import Image from 'next/image'

const Register = () => {

    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12">
                    <div className="w-full shadow-lg xl:w-3/4 lg:w-11/12 flex">
                        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center">Welcome to ECS!</h3>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-4">

                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                                        Phone Number
                                    </label>
                                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone" id="floating_phone" className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="965-748-89-90" required />

                                </div>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                                            First Name
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            type="text"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                                            Last Name
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="lastName"
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            placeholder="******************"
                                        />
                                        <p className="text-xs italic text-red-500">Please choose a password.</p>
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
                                            Confirm Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="c_password"
                                            type="password"
                                            placeholder="******************"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-slate-500 hover:text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Register
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                                <div className="text-center">
                                    <a
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="#"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>
                                <div className="text-center">
                                    <a
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="./index.html"
                                    >
                                        Already have an account? Login!
                                    </a>
                                </div>
                            </form>
                        </div>
                        <div
                            className="w-full h-auto hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                        >
                            <Image src="/register1.svg" width={841} height={1024} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register 