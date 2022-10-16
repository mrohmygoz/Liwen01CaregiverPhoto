import MainPhoto from "./MainPhoto";
import Img01 from "../public/images/stories/01.jpg";
import Img02 from "../public/images/stories/02.jpg";
import Img03 from "../public/images/stories/03.jpg";
import Img04 from "../public/images/stories/04.jpg";
import Img05 from "../public/images/stories/05.jpg";

export default function Main() {
    return (
        <div className='z-0 w-full absolute top-28 px-4 pb-6 flex justify-center items-center md:top-36 md:px-16'>
            <div className='w-full grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6'>
                <MainPhoto img={Img01} title="故事 #01" storyUrl="/stories/01" />
                <MainPhoto img={Img02} title="故事 #02" storyUrl="/stories/02" />
                <MainPhoto img={Img03} title="故事 #03" storyUrl="/stories/03" />
                <MainPhoto img={Img04} title="故事 #04" storyUrl="/stories/04" />
                <MainPhoto img={Img05} title="故事 #05" storyUrl="/stories/05" />
                <div className='w-full aspect-[4.5/3] md:h-full bg-[#5c5c5c96] hover:bg-[#5c5c5c] hover:cursor-pointer
                                flex justify-center items-center text-[#fffdf1]'>
                    <span className=''>故事 #攝影師</span>
                </div>
            </div>
        </div>
    );
}