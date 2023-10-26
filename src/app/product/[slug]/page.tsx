import { prismaClient } from "@/lib/prisma";
import ProductImage from "./components/product-images";

interface ProductDetailsPageProps{
    params:{
        slug: string
    }
}

const ProductDetailsPage = async ({params : {slug}} : ProductDetailsPageProps) => {

    const product = await prismaClient.product.findFirst({
        where:{
            slug: slug
        }
    })

    if(!product) return null;
    return ( 
        <div className="">
            <ProductImage imageUrls={product.imageUrl} name={product.name} />
        </div>
     );
}
 
export default ProductDetailsPage;