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
            </main>
        </main>
    );
}
