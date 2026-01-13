import { useEffect, useRef, useState } from 'react';

const Solution = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const sectionRef = useRef(null);
    const observerRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        // Observer untuk section utama
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const rect = entry.target.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    
                    // Cek apakah section ada di atas viewport (sudah lewat ke atas)
                    if (rect.bottom < 0) {
                        // Section sudah lewat ke atas, reset hasAnimated tapi biarkan item tetap visible
                        hasAnimated.current = false;
                        return;
                    }
                    
                    // Cek apakah section ada di bawah viewport (belum sampai)
                    if (rect.top > windowHeight) {
                        // Section belum terlihat, reset semua
                        setVisibleItems([]);
                        hasAnimated.current = false;
                        return;
                    }
                    
                    // Section sedang terlihat
                    if (entry.isIntersecting && !hasAnimated.current) {
                        hasAnimated.current = true;
                    }
                });
            },
            {
                threshold: 0,
                rootMargin: '0px',
            }
        );

        // Observer untuk setiap item
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = parseInt(entry.target.dataset.index);
                    
                    if (entry.isIntersecting) {
                        setVisibleItems((prev) => {
                            if (!prev.includes(index)) {
                                return [...prev, index];
                            }
                            return prev;
                        });
                    } else {
                        // Cek posisi element relatif terhadap viewport
                        const rect = entry.target.getBoundingClientRect();
                        const windowHeight = window.innerHeight;
                        
                        // Hanya hapus jika element ada di ATAS viewport (scroll ke atas melewati section)
                        if (rect.bottom < 0) {
                            setVisibleItems((prev) => prev.filter(item => item !== index));
                        }
                        // Jika element di BAWAH viewport, biarkan tetap (belum di-scroll sampai)
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        // Observe section
        if (sectionRef.current) {
            sectionObserver.observe(sectionRef.current);
        }

        // Observe items
        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach((el) => observerRef.current.observe(el));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            sectionObserver.disconnect();
        };
    }, []);

    const items = [
        "Pendekatan desain berbasis strategi",
        "Proses kerja yang jelas dan profesional",
        "Komunikasi yang transparan",
        "Cocok untuk UMKM, startup, dan personal brand",
        "Fokus pada keberlanjutan visual jangka panjang"
    ];

    return (
        <div ref={sectionRef}>
            <h1 className="text-[clamp(48px,6vw,96px)] text-[rgba(0,121,79,1)] text-center mt-[86px] font-bold px-4">
                Kenapa <span className="italic">Firsttime Design</span> ?
            </h1>
            
            <div className="mt-[84px] flex flex-col gap-[20px] md:gap-[50px] mb-[150px] overflow-x-hidden">
                {items.map((item, index) => (
                    <div
                        key={item}
                        data-animate
                        data-index={index}
                        className={`
                            group flex items-center 
                            ${index % 2 === 1 ? 'md:pl-[25%]' : ''} 
                            ${index % 2 === 0 ? 'bg-[rgba(0,121,79,1)]' : 'bg-[rgba(66,184,115,1)]'} 
                            ${index % 2 === 0 ? 'rounded-[0px_50px_50px_0px] md:mr-[clamp(16px,14vw,250px)]' : ''}
                            min-h-[150px] md:h-[249px]
                            transition-all duration-700 ease-out
                            hover:scale-y-[1.05] hover:shadow-2xl
                            ${visibleItems.includes(index) 
                                ? 'opacity-100 translate-x-0' 
                                : index % 2 === 0 
                                    ? 'opacity-0 -translate-x-24' 
                                    : 'opacity-0 translate-x-24'
                            }
                        `}
                        style={{ 
                            transitionDelay: visibleItems.includes(index) ? `${index * 150}ms` : '0ms',
                        }}
                    >
                        <p className={`
                            ${index % 2 === 0 ? 'mx-[clamp(16px,8vw,250px)]' : ''} 
                            text-[rgba(238,238,238,1)] 
                            text-[clamp(20px,3.5vw,53.99px)] 
                            w-[676px]
                            font-bold italic 
                            leading-tight
                            py-6 md:py-0
                        `}>
                            {item}
                        </p>
                    </div>
                ))}
            </div>
            <div className="border-t-2 border-[rgba(0,121,79,1)] mx-[clamp(16px,14vw,250px)] mb-16"></div>
        </div>
    );
};

export default Solution;