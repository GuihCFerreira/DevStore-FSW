import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";

const Cart = () => {

    const {products} = useContext(CartContext)

    return ( 
        <div className="p-5">
            <Badge className="gap-1 text-base uppercase border-primary px-3 py-[0.375rem] border-2 w-fit" variant={'outline'}>
                <ShoppingCartIcon size={16}/>
                Carrinho
            </Badge>

            {products.map((product) => <h1 key={product.id}>{product.name}</h1>)}
        </div>
     );
}
 
export default Cart;