import dbConnect from '@/lib/dbConnect'
import ProductCard from './ProductCard';

export default async function AllProducts() {
    const products = await dbConnect("products").find({}).toArray();

    return (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {products?.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
    )
}
