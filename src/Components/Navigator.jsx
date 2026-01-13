

const Navigator = () => {
    return (
        <div className={"flex justify-center items-center font-roboto py-[45px] sticky top-0 z-10"}>
            <div className={"flex justify-between w-full px-[2%] mx-[clamp(16px,14vw,250px)] bg-[rgba(255,255,255,1)] h-[88px] [@media(width<=1536px)]:h-[66px] rounded-[15px] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.25)]"}>
                <div className={"flex gap-[30%] items-center w-[153px]"}>
                    <div>
                        <img src="public/STIKER-02 2.png" alt="" className={"h-[62px]"}/>
                    </div>
                    
                    <div className={"border-2 border-[rgba(66,184,115,1)] h-[70%]"}>

                    </div>
                </div>
                <nav className={"h-auto flex items-center justify-center"}>
                    <ul className={"flex gap-[105px] h-auto"}>
                        {["Home", "Profile", "Package", "About"].map((item) => (
                            <li key={item}>
                                <a href="" className={"text-4xl [@media(width<=1536px)]:text-[24px] text-[rgba(0,121,79,1)] m-0 p-0"}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigator;