// 'use client';
import { PRICE, PrismaClient } from '@prisma/client';
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

const fetchLocations = async () => {
    return prisma.location.findMany();
};

const fetchCuisines = async () => {
    return prisma.cuisine.findMany();
};

export default async function Search({
    searchParams,
}: {
    searchParams: { city?: string; cuisine?: string; price?: PRICE };
}) {
    const restaurants = await fetchRestaurantsByCity(searchParams.city);
    const locations = await fetchLocations();
    const cuisines = await fetchCuisines();

    return (
        <>
            <Header />
            <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
                <SearchSideBar
                    locations={locations}
                    cuisines={cuisines}
                    searchParams={searchParams}
                />
                <div className='w-5/6'>
                    <h3></h3>
                    {restaurants.length ? (
                        restaurants.map(restaurant => (
                            <RestaurantCard
                                restaurant={restaurant}
                                key={restaurant.id}
                            />
                        ))
                    ) : (
                        <p>Sorry, no restaurants found.</p>
                    )}
                </div>
            </div>
        </>
    );
}
