import Link from "next/link";

export default function About() {
    return (
        <div className='z-0 w-full absolute top-28 px-4 pt-2 pb-6 lg:top-36 lg:px-16 lg:pb-12'>
            <div className='w-full lg:w-[70%]'>
                <div className=''>
                    <h2 className='text-3xl lg:text-4xl'>
                        關於我們
                    </h2>

                    <div className='mt-6'>
                        <h4>
                            臺北市北區家庭照顧者支持中心
                        </h4>
                        
                        <p>民國105年，社團法人中華民國士林靈糧堂社會福利協會（下文簡稱本會）承辦「建置老人家庭照顧者支持服務據點計畫」，由中華民國家庭照顧者關懷總會扶植，提供家庭照顧者支持服務迄今。期間於107年轉銜由臺北市政府社會局帶領，同時擴大編制、依行政區分工為四家單位承辦，本會便承接「臺北市北區家庭照顧者支持中心」，服務對象為居住於臺北市（北投區、士林區、內湖區）的「家庭照顧者」，並照顧「長期照顧十年計劃2.0」服務對象。以個案服務經驗為基礎，配合既有個別式服務：到宅照顧技巧指導、心理協談服務、安排學長姐志工電話關懷，以及與社區資源單位、在地商家合作，辦理照顧者講座、紓壓活動、支持團體等，持續提供照顧者完善的服務、確保其資源網絡連結順暢。</p>
                    </div>

                    <div className='mt-6'>
                        <h4>
                            攝影師 林佩瑾
                        </h4>

                        <p>
                            攝影工作者，亦是十年資歷的第一線家庭照顧者。在成為專職攝影工作者前從事室內設計，因突如其來的大病休養後，遂將從高中時期開始的拍攝興趣轉為正職，開設攝影工作室，孜孜於紀實報導、人物肖像、商品攝影。盼本次展覽發揮自己的專長與家庭照顧經驗，透過紀實攝影，用眼拍下動容的畫面，更用心感受情感的綿密。
                        </p>
                    </div>
                </div>
            </div>

            <div className='mt-8 flex flex-col lg:flex-row lg:justify-between'>
                <div className='lg:w-[70%]'>
                    <h2 className='text-3xl lg:text-4xl'>
                        主辦單位
                    </h2>
                    <div className=''>
                        <p className='lg:py-2'>
                            ｜臺北市政府社會局
                        </p>

                        <p className='lg:py-2'>
                            ｜社團法人中華民國士林靈糧堂社會福利協會承辦臺北市北區家庭照顧者支持中心
                        </p>

                        <p className='lg:py-2'>
                            ｜路易莎職人咖啡股份有限公司
                        </p>
                    </div>
                </div>

                <div className='mt-2 lg:mt-0 py-4 lg:py-6 px-2 lg:px-4 lg:col-span-1 flex items-end justify-end'>
                    <div className='bg-[#e2e2e2] py-2 lg:py-4'>
                        <h4 className='px-4 lg:px-4 py-2'>
                            聯絡資訊
                        </h4>

                        <div className='px-4 lg:px-4 pb-2 text-start text-lg'>
                            臺北市北區家庭照顧者支持中心<br/>
                            02-2838-1571 #252、#258、#214、#257<br/>
                            caregiversupport@slsc.org.tw
                        </div>

                        <h4 className='px-4 lg:px-4 py-2'>
                            攝影師 林佩瑾
                        </h4>

                        <div className='px-4 lg:px-4 pb-2 text-start text-lg'>
                            大瑾設計有限公司 02-88112925
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-4 flex justify-end p-2 lg:p-4'>
                <button>
                    <Link href='/'>更多故事 ＞</Link>
                </button>
            </div>
            
        </div>
    );
}