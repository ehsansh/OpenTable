import NavBar from '../components/NavBar';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import SearchSideBar from './components/SearchSideBar';

export const metadata = {
    title: 'Search Restaurant',
    description: 'Search Restaurant',
};

export default function Search() {
    return (
        <>
            <Header />
            <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
                <SearchSideBar />
                <div className='w-5/6'>
                    <RestaurantCard />
                </div>
            </div>
        </>
    );
}
