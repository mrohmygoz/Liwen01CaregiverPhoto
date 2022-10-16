import Image from "next/image";
import Link from "next/link";

export default function MainPhoto({img, title, storyUrl}) {
    return (
        <div className='w-full block relative'>
            <Image 
                src={img}
                layout='responsive'
            />
            <Link href={storyUrl}>
                <div className='hover:cursor-pointer absolute top-0 w-full h-full group hover:bg-[#5c5c5c96] flex justify-center items-center text-[#fffdf1]'>
                    <span className='hidden group-hover:block'>{title}</span>
                </div>
            </Link>
        </div>
    );
}