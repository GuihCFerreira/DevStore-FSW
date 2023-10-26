import { ProductWithTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import { ArrowDownIcon} from "lucide-react";
import Image from "next/image";
import { Badge } from "./badge";
import Link from "next/link";
interface ProductItemProps{
    product: ProductWithTotalPrice
}

const ProductItem = ({product} :ProductItemProps) => {
    return (
        <Link href={`/product/${product.slug}`}>
        <div className="flex flex-col gap-4 ">

            <div className="bg-accent rounded-lg h-[170px] w-full flex items-center justify-center relative">
            <Image
          src={product.imageUrl}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
          alt={product.name}
        />

        {product.discountPercent >0 &&(<Badge className="absolute left-3 top-2 px-2 py=[2px] " >
            <ArrowDownIcon size={16}/>
            <p>{product.discountPercent}%</p></Badge>)}
        


            </div>

            

            <div className="flex flex-col gap-1">
                <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">{product.name}</p>

                <div className="flex items-center gap-2">
                    {product.discountPercent > 0 ? (
                        <>
                            <p className="font-semibold overflow-hidden whitespace-nowrap text-ellipsis">R${product.totalPrice.toFixed(2)}</p>

                            <p className="opacity-75 line-through text-xs overflow-hidden whitespace-nowrap text-ellipsis">R$ {Number(product.basePrice).toFixed(2)}</p>
                        </>
                    ): (
                        <>
                            <p className="font-semibold overflow-hidden whitespace-nowrap text-ellipsis">R${product.basePrice.toFixed(2)}</p>
                        </>
                    )}

                    
                </div>
            </div>
        </div>
        </Link>
     );
}
 
export default ProductItem;