import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
    category: Category
}
    

const CategoryItem = ({category} : CategoryItemProps) => {
    return ( 
        <div className="flex flex-col">
            <div className="flex h-[150px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg bg-category-item-gradient">
                <Image 
                    src={category.imageUrl}
                    alt={category.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="object-contain h-auto max-h-[70%] w-auto max-w-[80%]"
                />
            </div>

            <div className="bg-accent py-3 rounded-br-lg rounded-bl-lg">
                <p className="font-semibold text-sm text-center">{category.name}</p>
            </div>
        </div>
     );
}
 

   

export default CategoryItem;