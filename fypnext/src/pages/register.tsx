import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from "next/router";
import { useUsersQuery, useCreateUserMutation, Role, AccountStatus } from 'schema/generated/graphql';
import { withApollo } from "utils/hooks/withApollo";

const Register = () => {

    const { error } = useUsersQuery()
    const [createUserMutation] = useCreateUserMutation()
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [role, setRole] = useState(Role as any);

    const router = useRouter()

    const onSubmit = async (): Promise<void> => {
        try {
            await createUserMutation({
                variables: {
                    data: {
                        name: name,
                        email: email,
                        password: password,
                        mobile: mobile,
                        role: role,
                        accountStatus: AccountStatus.Unverified
                    },
                }
            })
            router.push('/');
        } catch (e: any) {
            console.log(error);
        }
    }

    const handleLogin = (e) => {
        e.preventDefault()
        router.push('/login')
    }


    return (
        <>
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
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        placeholder="Email"
                                        name={email}
                                    />
                                </div>
                                <div className="mb-4">

                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="mobileNumber">
                                        Mobile Number
                                    </label>
                                    <input type="tel" name={mobile} onChange={(e) => { setMobile(e.target.value) }} id="mobileNumber" className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="965-748-89-90" required />

                                </div>
                                <div className="mb-4">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
                                            Full Name
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="name"
                                            type="text"
                                            placeholder="name"
                                            name={name}
                                            onChange={(e) => { setName(e.target.value) }}
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            placeholder="******************"
                                            name={password}
                                            onChange={(e) => { setPassword(e.target.value) }}
                                        />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <p className='mb-4'>Register as:</p>
                                    <div className="flex items-center mb-4">
                                        <input id="default-radio-1" type="radio" value={Role.Student} name="role" className="w-4 h-4 ml-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => { setRole(e.target.value) }} />
                                        <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Student</label>
                                        <input id="default-radio-1" type="radio" value={Role.Staff} name="role" className="w-4 h-4 ml-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => { setRole(e.target.value) }} />
                                        <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Staff</label>
                                        <input id="default-radio-1" type="radio" value={Role.Counselor} name="role" className="w-4 h-4 ml-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => { setRole(e.target.value) }} />
                                        <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Counselor</label>
                                    </div>
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-gray-100 hover:text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="button"
                                        onClick={() => onSubmit()}
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
                                        onClick={handleLogin}
                                    >
                                        Already have an account? Login!
                                    </a>
                                </div>
                            </form>
                        </div>
                        <div
                            className=" h-auto w-auto lg:block sm:bg-cover bg-cover rounded-l-lg"
                        >
                            <Image alt='RegisterPhoto' src="/register1.svg" width={841} height={1024} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withApollo(Register); 