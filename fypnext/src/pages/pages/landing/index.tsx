import Link from "next/link";
import Image from 'next/image'

const Landing = () => {

    return (
        <>
            <div className='grid grid-cols-2 pt-4 mb-20'>
                <div className="row-start-auto mx-auto my-auto p-6">
                    <h1 className='text-5xl text-gray-900'>
                        The Safe Space <br />You need
                    </h1>
                    <div className='mt-10 mx-auto break-after-right-auto'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed consectetur libero. Curabitur.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed consectetur libero. Curabitur.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed consectetur libero. Curabitur.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed consectetur libero. Curabitur.
                    </div>
                    <div className="py-8">
                        <button className='text-white hover:bg-white hover:text-black bg-blue-400 w-36 h-12 border rounded-sm'>
                            <Link href={'/Register'}>
                                Register
                            </Link>
                        </button>
                        <button className='text-black hover:bg-blue-400 hover:text-white p-1 px-2 bg-white ml-2 w-32 h-12 border rounded-sm'>
                            <Link href={'#'}>
                                Learn More
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="row-start-auto p-6 my-auto mx-auto">
                    <Image src="/mobile1.svg" width={509} height={364} />
                </div>
            </div>
            <div className='grid grid-cols-1 gap-5 pt-4 mb-40 break-normal'>
                <div className="row-start-auto mx-auto my-auto p-6 text-center">
                    <h1 className='text-5xl text-gray-900'>
                        How it Works
                    </h1>
                    <div className='mt-10 mx-auto'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor.
                    </div>
                </div>
                <div className="grid grid-cols-3 p-6 my-auto mx-auto">
                    <div className='text-center mx-auto'>
                        <Image src="/Ellipse1.svg" width={250} height={250} />
                        <h3 className="text-2xl mt-6">You sign up</h3>
                        <div className='mt-10 mx-auto'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor.
                        </div>
                    </div>
                    <div className='text-center mx-auto'>
                        <Image src="/Ellipse1.svg" width={250} height={250} />
                        <h3 className="text-2xl mt-6">You find a Counselor</h3>
                        <div className='mt-10 mx-auto'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor.
                        </div>
                    </div>
                    <div className='text-center  mx-auto'>
                        <Image className="" src="/Ellipse1.svg" width={250} height={250} />
                        <h3 className="text-2xl mt-6">You attend the session</h3>
                        <div className='mt-10 mx-auto'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor.
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-5 pt-4 mb-40 break-normal'>
                <div className="row-start-auto mx-auto my-auto p-6 text-center">
                    <div className='mt-10 mx-auto'>
                        <Image className="" src="/landing1.svg" width={495} height={298} />
                    </div>
                </div>
                <div className="p-6 my-auto mx-auto">
                    <h1 className='text-4xl text-gray-900'>
                        Real-time Chat with <br /> your Counselor
                    </h1>
                    <div className='mt-10 mx-auto'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor.
                    </div>
                    <div className="mt-4 text-cyan-400 text-base">
                        <a href="#">
                            Read More {">"}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing