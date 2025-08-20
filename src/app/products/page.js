import dbConnect from '@/lib/dbConnect'
import ProductCard from './components/ProductCard'
import AllProducts from './components/AllProducts';

export default async function Page() {
    const products = await dbConnect("products").find({}).toArray();

    return (
        <div className="p-6">
            <h2 className="text-4xl font-bold mb-8 text-center ">All Products</h2>
            {<AllProducts></AllProducts>}
        </div>
    )
}
