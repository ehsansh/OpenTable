import React from 'react';
import Header from './components/Header';

export default function loading() {
    return (
        <main>
            <Header />
            <div className='py-3 px-36 mt-10 flex flex-wrpa justify-center'>
                {Array.from({ length: 12 }).map((num, i) => (
                    <div
                        key={i}
                        className='animate-pulse bg-slate-200 w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer'
                    ></div>
                ))}
            </div>
        </main>
    );
}
