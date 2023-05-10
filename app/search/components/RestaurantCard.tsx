import Link from 'next/link';
import { Cuisine, Location, PRICE, Review } from '@prisma/client';
import Price from '@/app/components/Price';
import { calculateReviewRatingAverage } from '@/utils/calculateReviewRatingAverage';
import Stars from '@/app/components/Stars';

interface Restaurant {
    id: number;
    name: string;
    main_image: string;
    cuisine: Cuisine;
    location: Location;
    price: PRICE;
    slug: string;
    reviews: Review[];
}

export default function RestaurantCard({
    restaurant,
}: {
    restaurant: Restaurant;
}) {
    const renderRatingText = () => {
        const rating = calculateReviewRatingAverage(restaurant.reviews);
        if (rating > 4) return 'Awesome';
        if (rating > 3) return 'Good';
        if (rating > 2) return 'Average';
        return '';
    };

    return (
        <div className='border-b flex pb-5 ml-4'>
            <img
                src={restaurant.main_image}
                alt=''
                className='w-44 rounded h-36'
            />
            <div className='pl-5'>
                <Link href={`/restaurant/${restaurant.slug}`}>
                    <h2 className='text-3xl  capitalize'> {restaurant.name}</h2>
                </Link>
                <div className='flex items-start'>
                    <div className='flex items-center'>
                        <Stars reviews={restaurant.reviews} />
                    </div>

                    <p className='ml-2 text-sm'> {renderRatingText()} </p>
                </div>
                <div className='mb-9'>
                    <div className='font-light flex text-reg'>
                        <Price price={restaurant.price} />
                        <p className='mr-4 capitalize'>
                            {restaurant.cuisine.name}
                        </p>
                        <p className='mr-4 capitalize'>
                            {restaurant.location.name}
                        </p>
                    </div>
                </div>
                <div className='text-red-600'>
                    <Link href={`/restaurant/${restaurant.slug}`}>
                        View more information
                    </Link>
                </div>
            </div>
        </div>
    );
}
