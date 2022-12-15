import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

export default function Description({text , style}){

    
    const { ref, inView, entry } = useInView({
        threshold: 0.2
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
        <p  className={`font-medium text-lg mt-5 will-change-transform translate-y-3/4	 w-full lg:w-7/12 mx-auto opacity-0 ${style}`} ref = {ref}>
            {text}
        </p>
    )

}