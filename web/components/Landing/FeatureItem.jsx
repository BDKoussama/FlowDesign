import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

export default function FeatureItem({ text }){

    const { ref, inView, entry } = useInView({
        threshold: 1
    });

    if(inView){
        gsap.to( entry.target ,
            {
            autoAlpha : 1,
            translateZ : '1px',
            translateY : 0,
            ease : "power1.inOut",
            duration: 0.8
        })
    }

    return(
        <div className='text-center flex flex-col items-center flex-1 mt-0 md:mt-0 opacity-0 will-change-tranform translate-y-3/4' ref={ref}>
            <div className='h-24 w-24 bg-gray-200 rounded-full'></div>
            <p className='mt-10 text-lg font-medium w-10/12 mx-auto'> {text} </p>
        </div>
    )
}