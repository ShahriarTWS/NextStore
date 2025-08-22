import dbConnect from '@/lib/dbConnect'
import AllProducts from './components/AllProducts';

export const metadata = {
    title: "Products | NextStore",
    description:
        "Browse a wide range of products at NextStore. From electronics to fashion and accessories, find the best deals with secure checkout and fast delivery.",
};

export default async function Page() {

    return (
        <div className="p-6">
            <h2 className="text-4xl font-bold mb-8 text-center ">All Products</h2>
            {<AllProducts></AllProducts>}
        </div>
    )
}
