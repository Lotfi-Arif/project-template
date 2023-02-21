import Image from 'next/image'
import Link from 'next/link';
import { Cookies, useCookies } from "react-cookie"
import { useState } from 'react';
import { AccountStatus, LoginInput, Role, useLoginUserMutation } from 'schema/generated/graphql';
import { withApollo } from 'utils/hooks/withApollo';
import { useRouter } from 'next/router';
import { Feedback } from 'src/components/FeedBack';
import { toast } from 'react-toastify';

const LoginStudent = () => {

    const [cookie, setCookie] = useCookies(["user"])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setError] = useState('')
    const router = useRouter()
    const cookies = new Cookies();
    const deleteUserFromCookie = () => {
        if (cookies.get('user')) {
          cookies.remove('user');
        }
      }
    const [signIn] = useLoginUserMutation({
        onCompleted(data?) {

            setCookie('user', data.loginUser.accessToken, {
                path: "/",
                maxAge: 3600, // Expires after 1hr
                sameSite: true,
            });
            console.log('here in the login', data.loginUser.user);

            if (data.loginUser.user.role === Role.Admin){
                router.push('/pages/admin')
            }
            if (data.loginUser.user.role === Role.Counselor && data.loginUser.user.accountStatus === AccountStatus.Approved){
                router.push('/pages/counselor')
            }else {
                toast(
                    <Feedback
                        title="You have not been approved by the system!"
                        subtitle=""
                        type="error"
                        disableFeedback={true}
                    />,
                    {
                        progress: undefined,
                        toastId: 1,
                        autoClose: 3000,
                    },
                );
                localStorage.clear();
                deleteUserFromCookie
                router.push('/')
            }
            if (data.loginUser.user.role === Role.Student && data.loginUser.user.accountStatus === AccountStatus.Approved){
                router.push('/pages/user')
            }else {
                toast(
                    <Feedback
                        title="You have not been approved!"
                        subtitle=""
                        type="error"
                        disableFeedback={true}
                    />,
                    {
                        progress: undefined,
                        toastId: 1,
                        autoClose: 3000,
                    },
                );
                localStorage.clear();
                router.push('/');
            }
        

            localStorage.setItem('user', JSON.stringify(data.loginUser.user));
        },
    })



    const onSubmit = async (data: LoginInput, error) => {
        error.preventDefault()
        try {
            await signIn({
                variables: {
                    data: {
                        email: data.email,
                        password: data.password
                    }
                }
            })
        } catch (err: any) {
            console.log('here is the error', err.message)
            if (err && err.message.includes("USER_NOT_FOUND")) {
                toast(
                    <Feedback
                        title="There's an error!"
                        subtitle={err.graphQLErrors[0]?.extensions?.exception?.meta?.cause ?? err.graphQLErrors[0]?.message ?? err.message}
                        type="error"
                        disableFeedback={true}
                    />,
                    {
                        progress: undefined,
                        toastId: 1,
                        autoClose: 3000,
                    },
                );
            } else {
                toast(
                    <Feedback
                        title="There's an error!"
                        subtitle={err.graphQLErrors[0]?.extensions?.exception?.meta?.cause ?? err.graphQLErrors[0]?.message ?? err.message}
                        type="error"
                        disableFeedback={true}
                    />,
                    {
                        progress: undefined,
                        toastId: 1,
                        autoClose: 3000,
                    },
                );
            }
        }
    }


    return (
        <>
            <div className="mx-auto bg-white shadow-lg mt-14 md:w-2/3 lg:w-2/3 sm:w-2/3 rounded-2xl">
                <div className="grid grid-cols-2 text-left">
                    <div className="row-start-auto my-auto mx-auto p-4">
                        <h1 className="text-3xl text-sky-400">
                            Peace of mind allows <br />Positive mental health
                        </h1>
                        <p className="text-slate-500">
                            Welcome back ! Please Login to your account
                        </p>
                        <div>
                            <button aria-label="Continue with google" role="button" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10">
                                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z" fill="#4285F4" />
                                    <path d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z" fill="#34A853" />
                                    <path d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z" fill="#FBBC05" />
                                    <path d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z" fill="#EB4335" />
                                </svg>
                                <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                            </button>
                            <button aria-label="Continue with twitter" role="button" className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.1623 5.656C21.3989 5.9937 20.5893 6.21548 19.7603 6.314C20.634 5.79144 21.288 4.96902 21.6003 4C20.7803 4.488 19.8813 4.83 18.9443 5.015C18.3149 4.34158 17.4807 3.89497 16.5713 3.74459C15.6618 3.59421 14.7282 3.74849 13.9156 4.18346C13.1029 4.61842 12.4567 5.30969 12.0774 6.1498C11.6981 6.9899 11.607 7.93178 11.8183 8.829C10.1554 8.74566 8.52863 8.31353 7.04358 7.56067C5.55854 6.80781 4.24842 5.75105 3.1983 4.459C2.82659 5.09745 2.63125 5.82323 2.6323 6.562C2.6323 8.012 3.3703 9.293 4.4923 10.043C3.82831 10.0221 3.17893 9.84278 2.5983 9.52V9.572C2.5985 10.5377 2.93267 11.4736 3.54414 12.2211C4.15562 12.9685 5.00678 13.4815 5.9533 13.673C5.33691 13.84 4.6906 13.8647 4.0633 13.745C4.33016 14.5762 4.8503 15.3032 5.55089 15.8241C6.25147 16.345 7.09742 16.6338 7.9703 16.65C7.10278 17.3313 6.10947 17.835 5.04718 18.1322C3.98488 18.4294 2.87442 18.5143 1.7793 18.382C3.69099 19.6114 5.91639 20.2641 8.1893 20.262C15.8823 20.262 20.0893 13.889 20.0893 8.362C20.0893 8.182 20.0843 8 20.0763 7.822C20.8952 7.23017 21.6019 6.49702 22.1633 5.657L22.1623 5.656Z" fill="#1DA1F2" />
                                </svg>

                                <p className="text-base font-medium ml-4 text-gray-700">Continue with Twitter</p>
                            </button>
                        </div>
                        <div className="w-full flex items-center justify-between py-5">
                            <hr className="w-full bg-gray-400" />
                            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                            <hr className="w-full bg-gray-400" />
                        </div>
                        <div className="row-auto">
                            <form>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        name={email}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
                                        Password
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        name={password}
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        placeholder="******************"
                                    />
                                </div>
                                <div className="grid grid-cols-2 pb-6">
                                    <div className="row-start-auto text-gray-500">
                                        <input type="checkbox" className="mr-2" />
                                        Remember Me
                                    </div>
                                    <div className="row-end-auto text-right text-gray-500">
                                        Forgot password?
                                    </div>
                                </div>
                                <button type="submit" onClick={(e) => onSubmit({ email, password }, e)} className="text-white p-2 m-2 items-center disabled:opacity-70 active:translate-y-0.5 active:border-b-transparent transition duration-200 text-center ease-in-out rounded-xl disabled:cursor-not-allowed font-medium focus:outline-none border-b-4 bg-sky-500">Login</button>
                                <button type="button" className='text-white p-2 m-2 items-center disabled:opacity-70 active:translate-y-0.5 active:border-b-transparent transition duration-200 text-center ease-in-out rounded-xl disabled:cursor-not-allowed font-medium focus:outline-none border-b-4 bg-sky-500'>
                                    <Link href={'/register'}>
                                        Sign Up
                                    </Link>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="row-start-auto my-auto mx-auto">
                        <Image src="/register.svg" alt='registeration' width={723} height={723} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default withApollo(LoginStudent);