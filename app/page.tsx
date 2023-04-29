import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <main className='text-blue-700 text-7xl'>
            <div>hello next js</div>
        </main>
    );
}
