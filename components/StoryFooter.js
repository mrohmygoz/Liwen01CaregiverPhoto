import Link from "next/link";

export default function StoryFooter({aWord}) {
    return (
        <div className='w-full flex flex-col items-end pt-2 lg:pt-4'>
            <div className='w-full bg-[#e2e2e2] p-3 lg:p-5'>
                {aWord}
            </div>
            <Link href='/'>
                <button className='mt-5 lg:hidden'>
                    更多故事 ＞
                </button>
            </Link>
        </div>
        
    );
}