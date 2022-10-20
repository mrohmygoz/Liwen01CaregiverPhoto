export default function About() {
    return (
        <div className='z-0 w-full absolute top-28 px-4 pt-2 pb-6 lg:top-36 lg:px-16 lg:pb-12'>
            <div className='w-full lg:w-[70%]'>
                <h2 className='text-3xl lg:text-4xl'>
                    關於我們
                </h2>
                
                <p>自105年起，本會由中華民國家庭照顧者關懷總會扶植，承接臺北市家庭照顧者支持服務據點，並於107年轉銜至本市社會局帶領，提供家庭照顧者支持服務至今（111年）。</p>

                <p>臺北市依行政區劃分，由四區家庭照顧者支持中心承辦照顧者支持服務，本會承接「臺北市北區家庭照顧者支持中心」，服務對象為居住於臺北市（北投區、士林區、內湖區）的「家庭照顧者」，並照顧「長期照顧十年計劃2.0」服務對象。</p>

                <p>以個案服務經驗為基礎，配合既有個別式服務：到宅照顧技巧指導、心理協談服務、安排學長姐志工電話關懷，以及與社區資源單位、在地商家合作，辦理照顧者講座、紓壓活動、支持團體等，持續提供照顧者完善的服務、確保其資源網絡連結順暢。</p>
            </div>

            <div className='mt-8 flex justify-center lg:justify-end'>
                <div className='bg-[#e2e2e2]'>
                    <h2 className='lg:pb-0'>
                        聯絡資訊
                    </h2>

                    <p className='lg:pt-2'>
                        臺北市北區家庭照顧者支持中心<br/>
                        電話：02-2838-1571 #252、#258、#214、#257<br/>
                        Email：caregiversupport@slsc.org.tw
                    </p>
                </div>
            </div>
        </div>
    );
}