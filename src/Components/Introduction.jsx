import {useState, useEffect, useRef} from "react";

const Introduction = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const isTransitioning = useRef(false);
    const [elementWidth, setElementWidth] = useState(0);

    useEffect(() => {
        const calculateWidth = () => {
            const containerWidth = window.innerWidth - 154;
            console.log(containerWidth);
            const calculated = (containerWidth - (50 * 3)) / 4 ;
            console.log(calculated);
            setElementWidth(calculated); // ✅ Update state
        };

        calculateWidth(); // Hitung pertama kali
        
        // ✅ Tambah listener
        window.addEventListener('resize', calculateWidth);
        
        // ✅ Cleanup
        return () => window.removeEventListener('resize', calculateWidth);
    }, []);


    const cards = [
        {   
            id: 1,
            element: (
                <div 
                style={{
                    width: `${elementWidth}px`
                }}
                className={`
                h-[520px] [@media(width<=1536px)]:w-[303px] [@media(width<=1536px)]:h-[390px] border-5 border-[rgba(238,238,238,1)] rounded-[50px]
            `}>
                        <p className={"text-[32px] text-[rgba(238,238,238,1)] text-center [@media(width<=1536px)]:text-[21.3px]"}>Desain terlihat indah, tapi tidak <span className={"font-black italic"}>memaku pikiran</span></p>
                    </div>)
        },
        {
            id: 2,
            element: (
                <div 
                style={{
                    width: `${elementWidth}px`
                }}
                className={`
                h-[520px] border-5 border-[rgba(238,238,238,1)] rounded-[50px]
                `}>
                    <p className={"text-[32px] text-[rgba(238,238,238,1)] text-center [@media(width<=1536px)]:text-[21.3px]"}>Identitas visual <span className={"font-black italic"}>tidak konsisten</span></p>
                </div>
            )
        },
        {
            id: 3,
            element: (
                <div 
                style={{
                    width: `${elementWidth}px`
                }}
                className={`
                h-[520px] border-5 border-[rgba(238,238,238,1)] rounded-[50px]
                `}>
                    <p className={"text-[32px] text-[rgba(238,238,238,1)] text-center [@media(width<=1536px)]:text-[21.3px]"}><span className={"font-black italic"}>Pesan tidak tersampaikan</span> dengan jelas</p>
                </div>
            )
        },
        {
            id: 4,
            element: (
                <div 
                style={{
                    width: `${elementWidth}px`
                }}
                className={`
                h-[520px] border-5 border-[rgba(238,238,238,1)] rounded-[50px]
                `}>
                    <p className={"text-[32px] text-[rgba(238,238,238,1)] text-center [@media(width<=1536px)]:text-[21.3px]"}>Desain dibuat <span className={"font-black italic"}>tanpa arah dan strategi</span> yang terukur</p>
                </div>
            )
        }
    ]

    const itemsToShow = 4;
    const totalItems = cards.length;

    const allCards = [
        ...cards.slice(-itemsToShow ),
        ...cards,
        ...cards.slice(0, itemsToShow)
    ];
    
    useEffect(() => {
        updateCarousel(false);
    }, []);
    
    const updateCarousel = (withTransition = true, index = currentIndex) => {
        if (!carouselRef.current) return; 
        
        const cardWidth = carouselRef.current.children[0]?.offsetWidth || 404;
        const gap = 50;
        const offset = index * (cardWidth + gap);
        
        carouselRef.current.style.transition = withTransition ? 'transform 0.5s ease-in-out' : 'none';
        carouselRef.current.style.transform = `translateX(-${offset}px)`;
    };
    
     const handleNext = () => {
        if (isTransitioning.current) return;
        isTransitioning.current = true;
        
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex);
        updateCarousel(true, newIndex);
        
        setTimeout(() => {
            // Reset ke awal jika sudah di akhir
            if (newIndex >= totalItems) {
                setCurrentIndex(0);
                updateCarousel(false, 0);
            }
            isTransitioning.current = false;
        }, 500);
    };
    
    const handlePrev = () => {
        if (isTransitioning.current) return;
        isTransitioning.current = true;
        
        const newIndex = currentIndex - 1;
        setCurrentIndex(newIndex);
        updateCarousel(true, newIndex);
        
        setTimeout(() => {
            // Reset ke akhir jika sudah di awal
            if (newIndex < 0) {
                setCurrentIndex(totalItems - 1);
                updateCarousel(false, totalItems - 1);
            }
            isTransitioning.current = false;
        }, 500);
    };
    
    // Update carousel when currentIndex changes
    useEffect(() => {
        updateCarousel(true);
    }, [currentIndex]);
    
    // Auto play (opsional)
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000); // Ganti slide setiap 4 detik
        return () => clearInterval(interval);
    }, [currentIndex]);
    




    return (
        <div className={"bg-[rgba(0,121,79,1)] pt-[106px] h-[1520px]"} id="introduction">
            <h1 className={"text-[96px] text-center text-[rgba(238,238,238,1)] italic mb-[42px] mx-[clamp(16px,14vw,250px)] [@media(1200px<width<=1536px)]:text-[64px] [@media(760px<width<=1200px)]:text-[48px] [@media(width<=760px)]:text-[32px]"}>Apakah <span className={"font-black not-italic"}>Desainmu</span> sudah berfungsi <span className={"font-black not-italic"}>secara Optimal</span>?</h1>
            <p className={"text-[40px] text-[rgba(238,238,238,1)] text-center mb-[130px] mx-[clamp(16px,14vw,250px)] [@media(<1200px<width<=1536px)]:text-[27px] [@media(width<=1200px)]:text-[18px]"}>Banyak brand telah melakukan publikasi secara konsisten, namun belum mendapatkan dampak yang signifikan.</p>
            
            <div className={"mb-[143px]"}>
                <div className={"absolute flex justify-between w-full pt-[12%] px-[5px] z-1"}>
                    <button 
                        onClick={handlePrev}
                        className={"bg-[rgba(66,184,115,1)] flex justify-center items-center rounded-[50%] text-white text-[40px] w-[60px] h-[60px]"}>
                        <p className={"flex justify-center items-center"}>←</p>
                    </button>
                    <button 
                        onClick={handleNext}
                        className={"bg-[rgba(66,184,115,1)] flex justify-center items-center rounded-[50%] text-white text-[40px] w-[60px] h-[60px]"}>
                        <p className={"flex justify-center items-center"}>→</p>
                    </button>
                </div>
                <div className={"w-max-[1766px] flex justify-center w-auto mx-[70px] overflow-hidden relative"} id="carousel-container">
                    <div
                        ref={carouselRef}
                        className={"flex gap-[50px]"}>
                        {allCards.map((card, index) => (
                            <div 
                                key={`${card.id}-${index}`}
                            >
                                {card.element}
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
            
            <div className={"h-[259px]"}>
                <div className={"h-[126px] w-full bg-[linear-gradient(49deg,rgba(255,248,196,1),rgba(88,255,202,1))] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.25)]"}>
                    <div className={"mx-[clamp(16px,14vw,250px)] flex justify-center items-center h-full"}>
                        <p className={"text-[40px] text-[rgba(0,121,79,1)] text-center italic [@media(width<=1536px)]:text-[27px]"}>Desain yang efektif bukan sekadar <span className={"font-black not-italic"}>tampilan visual,</span> melainkan <span className={"font-black not-italic"}>alat komunikasi</span> dalam mengaudiens pelanggan.</p>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Introduction;