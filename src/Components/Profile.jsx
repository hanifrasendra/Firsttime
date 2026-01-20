

const Profile = () => {


    return(
        <div id="profile">
            <div className={"mt-[143px]"}>
                <div className={"mx-[clamp(16px,14vw,250px)] "}>
                    <h1 className={"text-center text-[96px] [@media(width<=1536px)]:text-[64px] text-[rgba(0,121,79,1)] italic mb-[168px]"}>Rancang Tampilan <span className={"font-black not-italic"}>Brandmu</span> yang <span className={"font-black not-italic"}>Memukau</span> Pelanggan</h1>
                    <div className={"w-full h-[487px] border-5 border-[rgba(0,121,79,1)] rounded-[50px]"}>
                        <div className={"mx-[6.5%] h-full flex flex-col "}>
                            <h2 className={"text-center text-[rgba(0,121,79,1)] text-[40px] [@media(1200px<width<=1536px)]:text-[27px] [@media(width<=1200px)]:text-[18px] font-bold italic mt-[75px]"}>- Firsttime Design -</h2>
                            <p className={"text-center text-[rgba(0,121,79,1)] text-[48px] [@media(1200px<width<=1536px)]:text-[32px] [@media(width<=1200px)]:text-[21px] [@media(width)] italic mt-[60px]"}>Pengerjaan kami berfokus pada proses perancangan yang <span className={"font-black not-italic"}>terstruktur</span> dan berbasis tujuan <span className={"font-black not-italic"}>komunikasi</span></p>
                            <div className={"border-3 [@media(width<=1536px)]:border-2 border-[rgba(0,121,79,1)] mt-[98px]"}></div>
                            <div className={"h-full flex justify-center items-center"}>
                                <p className={"text-[24px] [@media(width<=1536px)]:text-[16px] text-[rgba(0,121,79,1)] italic leading-[2]"}>Search on me   -   @firsttime_design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"mt-[148px]"}>
                <div className={"border border-[rgba(0,121,79,1)] mx-[clamp(16px,14vw,250px)]"}></div>
                <h1 className={"text-[40px] text-[rgba(0,121,79,1)] [@media(width<=1536px)]:text-[27px] [@media(width<=1200px)]:text-[18px] italic text-center mt-[47px]"}>Kami Membantu Klien untuk Memperkuat :</h1>
                <div className={"flex mx-[3%] gap-[2%] mt-[66px]"}>
                    <div className={"bg-[rgba(0,121,79,1)] flex-1 h-[391px] rounded-[50px] group hover:bg-[linear-gradient(135deg,rgba(255,248,196,1),rgba(88,255,202,1))]"}>
                        <p className={"text-[32px] text-[rgba(238,238,238,1)] text-center font-bold italic group-hover:text-[rgba(0,121,79,1)]"}>Identitas Visual</p>
                    </div>
                    <div className={"bg-[rgba(0,121,79,1)] flex-1 h-[391px] rounded-[50px] group hover:bg-[linear-gradient(135deg,rgba(255,248,196,1),rgba(88,255,202,1))]"}>
                        <p className={"text-[32px] text-[rgba(238,238,238,1)] text-center font-bold italic group-hover:text-[rgba(0,121,79,1)]"}>Pesan Brand</p>
                    </div>
                    <div className={"bg-[rgba(0,121,79,1)] flex-1 h-[391px] rounded-[50px] group hover:bg-[linear-gradient(135deg,rgba(255,248,196,1),rgba(88,255,202,1))]"}>
                        <p className={"text-[32px] text-[rgba(238,238,238,1)] text-center font-bold italic group-hover:text-[rgba(0,121,79,1)]"}>Komunikasi Visual</p>
                    </div>
                    <div className={"bg-[rgba(0,121,79,1)] flex-1 h-[391px] rounded-[50px] group hover:bg-[linear-gradient(135deg,rgba(255,248,196,1),rgba(88,255,202,1))]"}>
                        <p className={"text-[32px] text-[rgba(238,238,238,1)] text-center font-bold italic group-hover:text-[rgba(0,121,79,1)]"}>Desain Berkelanjutan</p>
                    </div>
                </div>
                <div className={"border border-[rgba(0,121,79,1)] mx-[clamp(16px,14vw,250px)] mt-[141px]"}></div>
            </div>
        </div>
    )
}

export default Profile