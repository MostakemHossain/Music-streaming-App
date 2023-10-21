"use client"

import Image from "@/node_modules/next/image";
import { useRouter } from "@/node_modules/next/navigation";
import {FaPlay} from 'react-icons/fa'

interface ListItemProps{
   image:string;
   name:string;
   href:string;
    
}

const ListItem: React.FC<ListItemProps> = ({
    image,
    name,
    href,
}) => {
    const router= useRouter();
    const onclick=()=>{
        // add authentication before push
        router.push(href);
    }
    return ( <div>
        <button
        onClick={onclick}
        className="
        
        relative
        group
        flex
        items-center
        rounded-md
        overflow-hidden
        gap-x-4
        bg-neutral-100/10
        hover:bg-neutral-100/20
        transition
        pr-24
        
        "
        >
            <div className="
            relative
            min-h-[64px]
            min-w-[64px]

            ">
                <Image
                className="object-cover"
                fill
                src={image}
                alt="image"
                />

            </div>
            <p className="font-medium truncate py-5">
                {name}
            </p>
            <div className="
            absolute
            transition
            rounded-full
            opacity-0
            flex
            items-center
            justify-center
           bg-green-500
           p-4
           drop-shadow-md
           right-5
           group-hover:opacity-100
           hover:scale-110
            
            ">
                <FaPlay className="text-black"/>

            </div>
        </button>
       
    </div> );
}
 
export default ListItem;