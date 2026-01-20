

const Navigator = () => {



    return (
        <div className={"flex justify-center items-center font-roboto py-[45px] sticky top-0 z-10"} id="navigator">
            <div className={"flex justify-between w-full px-[2%] mx-[clamp(16px,14vw,250px)] bg-[rgba(255,255,255,1)] h-[88px] [@media(1200px<width<=1536px)]:h-[66px] [@media(width<=1200px)]:h-[44px] rounded-[15px] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.25)]"}>
                <div className={"flex gap-[44px] [@media(1200px<width<=1536px)]:gap-[33px] [@media(width<=1200px)]:gap-[22px] items-center w-[153px]"}>
                    <div>
                        <img src="./STIKER-02-2.png" alt="" className={"h-[62px] [@media(width<=1200px)]:h-[41px] w-auto"}/>
                    </div>
                    
                    <div className={"border-2 border-[rgba(66,184,115,1)] h-[70%]"}>

                    </div>
                </div>
                <nav className={"h-auto flex items-center justify-center"}>
                    <ul className={"flex items-center gap-[105px] [@media(1200px<width<=1526px)]:gap-[70px] [@media(width<=1200px)]:gap-[40px] h-full"}>
                        {["Home", "Profile", "Package", "About"].map((item) => (
                            <li key={item} className={"items-center relative"}>
                                <a href={`#${item.toLowerCase()}`} className={"text-4xl [@media(1200px<width<=1536px)]:text-[24px] [@media(width<=1200px)]:text-[18px] text-[rgba(0,121,79,1)] m-0 p-0 after:bg-[rgba(0,121,79,1)] after:absolute after:w-0 after:h-[4px] hover:after:w-full after:transition-all after:ease-in-out after:duration-300 after:bottom-[-10px] after:left-0"}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigator;