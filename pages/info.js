import Link from "next/link";
import Image from "next/image";
import MainImg from "../public/images/main.jpg";

export default function Info() {
    return (
        <div>
            <div className='hidden lg:flex z-30 fixed left-[67%] w-[33%] h-screen justify-end items-end p-12'>
                <button>
                    <Link href='/'>更多故事 ＞</Link>
                </button>
            </div>

            <div className='z-0 w-full absolute top-28 px-4 pt-2 pb-6 grid grid-cols-1 gap-4
                            lg:top-36 lg:px-16 lg:pb-12 lg:grid-cols-2 lg:gap-8'>
                <Image 
                    src={MainImg}
                    layout='responsive'
                />
                
                <div className='flex flex-col w-full h-full'>
                    <h2 className='text-3xl lg:text-4xl'>
                        參觀資訊
                    </h2>

                    <div className='flex flex-col w-full h-full justify-evenly'>
                        <p className='lg:leading-10'>
                            日期｜2022.11.03～11.30<br/>
                            時間｜12:30-22:00<br/>
                            地點｜路易莎咖啡 士林捷運門市 <br/>
                            　　｜臺北市士林區中正路224號3樓
                        </p>

                        <p>
                            觀展須知｜請遵守店家規定，並於參觀過程一同維持展覽空間品質，勿觸碰展品。
                        </p>
                    </div>

                    <div className='flex justify-end'>
                        <Link href='/'>
                            <button className='mt-8 lg:hidden'>
                                更多故事 ＞
                            </button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}