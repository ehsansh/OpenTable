import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        const restaurant = await prisma.restaurant.findFirst();
        console.log(restaurant);
        res.status(200).json({ restaurant });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Something went wrong' });
    }
}
