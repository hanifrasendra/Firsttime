import Navigator from "./Navigator.jsx";

const Hero = () => {


    return(
        <div className={"mb-[109px]"}>
            <div className={"absolute z-0 top-0 overflow-hidden"}>
                <div className={"flex animate-[scrollRight_30s_linear_infinite]"}>
                    <img src="./STIKER-06-6.png" alt="" />
                    <img src="./STIKER-06-6.png" alt="" />
                    <img src="./STIKER-06-6.png" alt="" />
                    <img src="./STIKER-06-6.png" alt="" />
                    <img src="./STIKER-06-6.png" alt="" />
                </div>
                <div className={"flex animate-[scrollLeft_30s_linear_infinite]"}>
                    <img src="./STIKER-06-6.png" alt="" />
                    <img src="./STIKER-06-6.png" alt="" />
                    <img src="./STIKER-06-6.png" alt="" />
                    <img src="./STIKER-06-6.png" alt="" />
                    <img src="./STIKER-06-6.png" alt="" />
                </div>
            </div>
            <div className={"flex justify-center items-center flex-col mx-[10%] relative z-2"}>
                <div className={"mb-[42px]"}>
                    <img src="./STIKER-02-2.png" alt="" />
                </div>
                <h1 className={"text-[96px] text-center text-[rgba(0,121,79,1)] font-black mb-5"}><span className={"font-normal italic"}>Design</span> That Makes Your Brand <span className={"font-thin italic"}>Remembered</span></h1>
                <p className={"text-[rgba(0,121,79,1)] text-[24px] mb-[48px]"}><span className={"text-[36px] italic"}>Not just pretty visuals,</span> We design with <span className={"font-bold"}>purpose, clarity, and strategy</span>, so your brand actually works !</p>
                <button className={"bg-[linear-gradient(-83deg,rgba(255,248,196,1),rgba(88,255,202,1))] rounded-[71.28px] w-[528px] h-[66.48px]"}>
                    <p className={"text-[rgba(0,121,79,1)] text-[36px] font-black"}>Start Your First Design</p>
                </button>
            </div>
        </div>
    )
}

export default Hero;