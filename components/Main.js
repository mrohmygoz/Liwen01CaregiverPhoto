import MainPhoto from "./MainPhoto";
import Img01 from "../public/images/stories/01.jpg";
import Img02 from "../public/images/stories/02.jpg";
import Img03 from "../public/images/stories/03.jpg";
import Img04 from "../public/images/stories/04.jpg";
import Img05 from "../public/images/stories/05.jpg";
import Img00 from "../public/images/stories/00.jpg";
import Footer from "./Footer";

export default function Main() {
    return (
        <div className='z-0 w-full absolute top-28 px-4 pb-6 lg:top-36 lg:px-16'>
            <div className='w-full grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-3'>
                <MainPhoto img={Img01} title="故事 #01" storyUrl="/stories/01" />
                <MainPhoto img={Img02} title="故事 #02" storyUrl="/stories/02" />
                <MainPhoto img={Img03} title="故事 #03" storyUrl="/stories/03" />
                <MainPhoto img={Img04} title="故事 #04" storyUrl="/stories/04" />
                <MainPhoto img={Img05} title="故事 #05" storyUrl="/stories/05" />
                <MainPhoto img={Img00} title="故事 #攝影師" storyUrl="/stories/00" />
            </div>
        </div>
    );
}