import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import { HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, RectangleHorizontalIcon, SpeakerIcon, SquareIcon } from "lucide-react";

interface CategoryItemProps {
    category: Category
}

const CategoryItem = ({category} : CategoryItemProps) => {

    const categoryIcon ={
        keyboards: <KeyboardIcon size={16}/>,
        monitors :<MonitorIcon size={16}/>,
        headphones: <HeadphonesIcon size={16}/>,
        mousepads:<RectangleHorizontalIcon size={16}/>,
        speakers: <SpeakerIcon size={16}/>,
        mouses:<MouseIcon size={16}/>
    }
    return ( 
        <Badge variant={'outline'} className="py-3 flex justify-center items-center gap-2">
            {categoryIcon[category.slug as keyof typeof categoryIcon]}
            <span className="text-xs font-semibold">{category.name}</span>
        </Badge>
     );
}
 
export default CategoryItem;