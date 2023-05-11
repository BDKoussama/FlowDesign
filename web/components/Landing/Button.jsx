import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

export default function Button({ text , url , style , animate = true}){

    const { ref, inView, entry } = useInView({
        threshold: 0.2
    });

    if(inView && animate){
        gsap.to(entry.target ,
            {
            autoAlpha : 1,
            translateZ : '1px',
            translateY : 0,
            ease : "power1.in",
            duration: 0.8
        })
    }

    return(     
        <Link href={url} >
            <span ref = {ref} className={`custom-btn cursor-pointer  ${animate ? 'opacity-0 translate-y-3/4' : 'opacity-1'} inline-block py-3 capitalize px-10 rounded-full bg-gradient-to-r to-[#A56FFC] from-[#644595] text-white font-medium ${style}`}>
                {text}
            </span>
        </Link>
    )
}