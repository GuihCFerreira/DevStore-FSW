import { CartContext, CartProduct } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";
import { useContext } from "react";

interface CartItemProps {
    product: CartProduct
}

const CartItem = ({product} : CartItemProps) => {

    const {decreaseProductQuantity, increaseProductQuantity} = useContext(CartContext)

    const handleDecreaseProductQuantityClick = () =>{
        decreaseProductQuantity(product.id)
    }

    const handleIncreaseProductQuantityClick = () =>{
        increaseProductQuantity(product.id)
    }

    return ( 
        <div className="flex items-center justify-between">
            
            <div className="flex items-center gap-4">
                <div className="bg-accent flex items-center justify-center rounded-lg h-[77px] w-[77px]">
                    <Image 
                        src={product.imageUrl}
                        alt={product.name}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-auto w-auto max-h-[70%] max-w-[80%]"
                    />
                </div>

                <div className="flex flex-col">
                    <p className="text-xs">{product.name}</p>

                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-bold">R${product.totalPrice.toFixed(2)}</p>
                        {product.discountPercent > 0 && (<p className="opacity-75 line-through text-xs">R$ {Number(product.basePrice).toFixed(2)}</p>)}
                    </div>

                <div className="flex items-center gap-1">
                    <Button variant={'outline'} size={"icon"} className="w-8 h-8" onClick={handleDecreaseProductQuantityClick}>
                        <ArrowLeftIcon size={14}/>
                    </Button>
                    <span className="text-xs">{product.quantity}</span>
                
                    <Button variant={'outline'} size={"icon"} className="w-8 h-8" onClick={handleIncreaseProductQuantityClick}>
                        <ArrowRightIcon size={14}/>
                    </Button>
                </div>

                </div>
            </div>

            <Button size={'icon'} variant={'outline'}>
                <TrashIcon/>
            </Button>

        </div>
     );
}
 
export default CartItem;