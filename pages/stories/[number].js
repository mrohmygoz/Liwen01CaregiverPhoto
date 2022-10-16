import Image from "next/image";
import Link from "next/link";
import Img01 from "../../public/images/stories/01.jpg";
import Img02 from "../../public/images/stories/02.jpg";
import Img03 from "../../public/images/stories/03.jpg";
import Img04 from "../../public/images/stories/04.jpg";
import Img05 from "../../public/images/stories/05.jpg";
import Story01 from "../../components/stories/Story01";
import Story02 from "../../components/stories/Story02";
import Story03 from "../../components/stories/Story03";
import Story04 from "../../components/stories/Story04";
import Story05 from "../../components/stories/Story05";

export async function getStaticPaths() {
    let numbers = ['01', '02', '03', '04', '05'];
    return {
        paths: numbers.map((n) => {
            return {
                params: {
                    number: n
                }
            }
        }),
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const postData = {
        number: parseInt(params.number)
    };

    return {
        props: {
            postData,
        },
    };
}

export default function Story({postData}) {
    const imageLinks = [Img01, Img02, Img03, Img04, Img05];

    return (
        <div>
            <div className='hidden md:flex z-30 fixed left-[67%] w-[33%] h-screen justify-end items-end p-12'>
                <button>
                    <Link href='/'>更多故事 ＞</Link>
                </button>
            </div>
            <div className='z-0 w-full absolute top-28 px-4 pb-6 flex flex-col md:w-[67%] md:top-36 md:px-16 md:pb-12'>
                <Image 
                    src={imageLinks[postData.number-1]}
                    layout='responsive'
                />

                {(() => {
                    switch (postData.number) {
                        case 1:
                            return <Story01 />
                        case 2:
                            return <Story02 />
                        case 3:
                            return <Story03 />
                        case 4:
                            return <Story04 />
                        case 5:
                            return <Story05 />
                    }
                })()}
            </div>
        </div>
    );
}