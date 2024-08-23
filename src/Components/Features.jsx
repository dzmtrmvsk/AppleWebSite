import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "../utils/animations"
import { explore1Img, explore2Img, exploreVideo } from "../utils/index.js"
import { useRef } from "react"
import { gsap } from "gsap"

const Features = () => {

    const videoRef = useRef();

    useGSAP(() => {
        gsap.to('#exploreVideo', {
            scrollTrigger: {
                trigger: 'exploreVideo',
                toggleActions: 'play pause reverse restart',
                start: '-10% bottom',
            },
            onComplete: () => {
                videoRef.current.play();
            },
        }
        )
        animateWithGsap('#features_title', { y: 0, opacity: 1 });
        animateWithGsap('.g_grow', {
            scale: 1,
            opacity: 1,
            ease: 'power1'
        }, {
            scrub: 5.5,
        });
        animateWithGsap('.g_text', {
            y: 0,
            opacity: 1,
            ease: 'power2.inOut',
            duration: 1,
        })
    }, [])

    return (
        <section className="bg-zinc h-full common-padding relative overflow-hidden">
            <div className="screen-max-width">
                <div className="mb-12 w-full">
                    <h1 id="features_title" className="section-heading">
                        Explore the full story
                    </h1>
                </div>
                <div className="flex flex-col justify-center items-center overflow-hidden">
                    <div className="mt-32 mb-24 pl-24">
                        <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
                        <h2 className="text-5xl lg:text-7xl font-semibold">Forged in titanium.</h2>
                    </div>
                    <div className="flex-center flex-col sm:px-10">
                        <div className="relative h-[50vh] w-full flex items-center">
                            <video playsInline id="exploreVideo" className="w-full h-full object-cover object-center"
                                preload="none" muted autoPlay ref={videoRef}
                            >
                                <source src={exploreVideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className="flex flex-col w-full relative">
                            <div className="feature-video-container">
                                <div className="flex-1 overflow-hidden h-[50vh]">
                                    <img src={explore1Img} alt="titanium" className="feature-video g_grow" />
                                </div>
                                <div className="flex-1 overflow-hidden h-[50vh]">
                                    <img src={explore2Img} alt="titanium2" className="feature-video g_grow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features