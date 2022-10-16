import Link from "next/link";

export default function StoryFooter({aWord}) {
    return (
        <div className='w-full flex flex-col items-end pt-2 md:pt-4'>
            <div className='w-full bg-[#e2e2e2] p-3 md:p-5'>
                給照顧者們的一句話：{aWord}
            </div>
            <Link href='/'>
                <button className='mt-4 md:hidden'>
                    更多故事 ＞
                </button>
            </Link>
        </div>
        
    );
}