"use client"

import Image from "next/image";
import { useState } from "react";

interface ProductImageProps {
    name: string;
    imageUrls: string[];
}

const ProductImage = ({name,imageUrls}: ProductImageProps) => {
    const images = [imageUrls,imageUrls,imageUrls,imageUrls]
    const [currentImage, setCurrentImage] = useState(images[0])

    const handleImageClick = (imageUrls : string)=>{
        setCurrentImage(imageUrls)
    }
    return ( 
        <div className="flex flex-col">
        <div className=" flex bg-accent h-[380px] items-center w-full justify-center">
            <Image
            alt={name}
            src={currentImage}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
            />
        </div>

        <div className="grid grid-cols-4 gap-4 mt-8 px-5">
        {images.map((ind)=>
        <button onClick={()=> handleImageClick(ind)} key={ind}>
        <div className={`flex h-[100px] items-center justify-center rounded-lg bg-accent
        ${ind === currentImage && "border-2 border-solid border-primary" }`} >
            <Image
            alt={name}
            src={ind}
            width={0}
            height={0}
            sizes="100vw"
            className={`h-auto max-h-[70%] w-auto max-w-[80%]`}
            />
        </div>
        </button>
        )}
        </div>
        
        </div>
     );
}
 
export default ProductImage;
