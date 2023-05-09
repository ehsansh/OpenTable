// 'use client';
import { PrismaClient } from '@prisma/client';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import SearchSideBar from './components/SearchSideBar';

export const metadata = {
    title: 'Search Restaurant',
    description: 'Search Restaurant',
};

const prisma = new PrismaClient();

const fetchRestaurantsByCity = (city: string | undefined) => {
    const select = {
        id: true,
        name: true,
        main_image: true,
        price: true,
        cuisine: true,
        location: true,
        slug: true,
    };
    if (!city) return prisma.restaurant.findMany({ select });
    return prisma.restaurant.findMany({
        where: {
            location: {
                name: {
                    equals: city.toLocaleLowerCase(),
                },
            },
        },
        select,
    });
};

export default async function Search({
    searchParams,
}: {
    searchParams: { city: string };
}) {
    const restaurants = await fetchRestaurantsByCity(searchParams.city);
    console.log(restaurants);
    return (
        <>
            <Header />
            <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
                <SearchSideBar />
                <div className='w-5/6'>
                    <h3></h3>
                    {restaurants.length ? (
                        <RestaurantCard />
                    ) : (
                        <p>Sorry, no restaurants found.</p>
                    )}
                </div>
            </div>
        </>
    );
}
