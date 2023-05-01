import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <main className='bg-gray-100 min-h-screen w-screen'>
            <main className='max-w-screen-2xl m-auto bg-white'>
                <nav className='bg-white p-2 flex justify-between'>
                    <a href='' className='font-bold text-gray-700 text-2xl'>
                        OpenTable
                    </a>
                    <div>
                        <div className='flex'>
                            <button className='bg-blue-400 text-white border p-2 rounded mr-3'>
                                Sign in
                            </button>
                            <button className='border p-2 rounded'>
                                Sign up
                            </button>
                        </div>
                    </div>
                </nav>
                <div className='h-96 overflow-hidden'>
                    <div className='bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center'>
                        <h1 className='text-7xl text-white capitalize text-shadow text-center'>
                            Peter Pane - Kassel (Toronto)
                        </h1>
                    </div>
                </div>
                <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11 '>
                    <div className='bg-white w-[70%] rounded p-3 shadow'>
                        <nav className='flex text-reg border-b pb-2'>
                            <a href='' className='mr-7'>
                                Overview
                            </a>
                            <a href='' className='mr-7'>
                                Menu
                            </a>
                        </nav>
                        <div className='mt-4 border-b pb-6'>
                            <h1 className='font-bold text-6xl'>
                                Peter Pane - Kassel{' '}
                            </h1>
                        </div>
                        <div className='flex items-end'>
                            <div className='ratings mt-2 flex items-center'>
                                <p>*****</p>
                                <p className='text-reg ml-3'>4.9</p>
                            </div>
                            <div>
                                <p className='text-reg ml-4'>600 Reviews</p>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <p className='text-lg font-light'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Itaque et minus sint in,
                                inventore eligendi placeat. Nulla, labore sit?
                                Aut odit ratione optio doloremque ut dignissimos
                                nisi? In, tenetur debitis?
                            </p>
                        </div>
                        <div>
                            <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5 '>
                                4 photos
                            </h1>
                            <div className='flex flex-wrap'>
                                <img
                                    src='https://resizer.otstatic.com/v2/photos/xlarge/1/23706018.jpg'
                                    alt=''
                                    className='w-56 h-44 mr-1 mb-1'
                                />
                                <img
                                    src='https://resizer.otstatic.com/v2/photos/xlarge/1/23706018.jpg'
                                    alt=''
                                    className='w-56 h-44 mr-1 mb-1'
                                />
                                <img
                                    src='https://resizer.otstatic.com/v2/photos/xlarge/1/23706018.jpg'
                                    alt=''
                                    className='w-56 h-44 mr-1 mb-1'
                                />
                                <img
                                    src='https://resizer.otstatic.com/v2/photos/xlarge/1/23706018.jpg'
                                    alt=''
                                    className='w-56 h-44 mr-1 mb-1'
                                />
                            </div>
                        </div>
                        <div>
                            <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5 '>
                                What 100 people are saying?
                            </h1>
                            <div className='border-b pb-7 mb-7'>
                                <div className='flex'>
                                    <div className='w-1/6 flex flex-col items-center'>
                                        <div className='rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center'>
                                            <h2 className='text-white text-2xl'>
                                                MJ
                                            </h2>
                                        </div>
                                        <p className='text-center'>
                                            Mike Jackson
                                        </p>
                                    </div>
                                    <div className='ml-10 w-5/6 '>
                                        <div className='flex items-center'>
                                            <div className='flex mr-5'>
                                                ****
                                            </div>
                                        </div>
                                        <div className='mt-5'>
                                            <p className='text-lg font-light'>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Modi, eligendi?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </main>
    );
}
