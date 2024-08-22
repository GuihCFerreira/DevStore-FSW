"use client"

import Image from "next/image";
import { useState } from "react";

interface ProductImageProps {
    name: string;
    imageUrls: string[];
}

const ProductImage = ({name,imageUrls}: ProductImageProps) => {
    const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };
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
            {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            className={`flex h-[100px] items-center justify-center rounded-lg bg-accent
                ${
                  imageUrl === currentImage &&
                  "border-2 border-solid border-primary"
                }
            `}
            onClick={() => handleImageClick(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={name}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
            />
          </button>
        ))}
            {/* {images.map((ind)=>
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
        )} */}
        </div>
        
        </div>
     );
}
 
export default ProductImage;
