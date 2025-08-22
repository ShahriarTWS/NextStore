import ProductCard from '@/app/products/components/ProductCard';
import dbConnect from '@/lib/dbConnect'
import ViewAllBtn from './ViewAllBtn';

export default async function FeaturedProducts() {
    // Fetch products
    let products = await dbConnect("products").find({}).toArray();

    // Convert _id to string if needed
    products = products.map(p => ({ ...p, _id: p._id.toString() }));

    // Take only first 6 products
    const featured = products.slice(0, 6);

    return (
        <div className="py-6 max-w-7xl mx-auto px-4 md:px-0">
            <h1 className="text-4xl md:text-5xl font-bold text-center my-6">
                Featured Products
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {featured.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
            <ViewAllBtn></ViewAllBtn>
        </div>
    )
}
