import prisma from '@/app/libs/prismadb';

export default async function getListings() {
  try {
    const listings = await prisma.listing.findMany({
      orderBy: { createdAt: 'desc' }
    });

    // Date objects can't be passed to a client component. Need toIsoString() method to transform Data type into a string.
    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}