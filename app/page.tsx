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
                <main>
                    <div className='h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2 '>
                        <div className='text-center mt-10'>
                            <h1 className='text-white text-5xl font-bold mt-2 mb-2'>
                                Find your table for any occasion
                            </h1>
                        </div>
                        <div className='text-left text-lg  py-3 m-auto flex justify-center '>
                            <input
                                type='text'
                                className='rounded mr-3 p-2 w-[450px]'
                                placeholder='state, city or town'
                            />
                            <button className='rounded bg-red-600 px-9 py-2 text-white'>
                                Let's go
                            </button>
                        </div>
                    </div>
                    <div className='py-3 px-36 mt-10 flex flex-wrap'>
                        <div className='w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer'>
                            <img
                                src='https://resizer.otstatic.com/v2/photos/wide-medium/4/32602466.png'
                                alt=''
                                className='w-full h-36'
                            />
                            <div className='p-1'>
                                <h3 className='font-bold text-2xl mb-2'>
                                    Peter Pane - Kassel
                                </h3>
                                <div className='flex items-start'>
                                    <div className='flex mb-2'>*****</div>
                                    <p className='ml-2'>65 reviews</p>
                                </div>
                                <div className='flex text-reg font-light capitalize'>
                                    <p className='mr-3 '>Mexican</p>
                                    <p className='mr-3'>$$$</p>
                                    <p>Toronto</p>
                                </div>
                                <p className='text-sm mt-1 font-bold'>
                                    Booked 3 times today
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </main>
        </main>
    );
}
