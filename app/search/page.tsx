'use client';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import SearchSideBar from './components/SearchSideBar';

import { useRouter } from 'next/router';

// export const metadata = {
//     title: 'Search Restaurant',
//     description: 'Search Restaurant',
// };

export default function Search() {
    // const router = useRouter();
    // const raw = router.query;
    // console.log(raw);
    // const value = Array.isArray(raw) ? raw[0] : raw;

    return (
        <>
            <Header />
            <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
                <SearchSideBar />
                <div className='w-5/6'>
                    <h3></h3>
                    <RestaurantCard />
                </div>
            </div>
        </>
    );
}
