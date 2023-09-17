import { useCallback, useLayoutEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Button from "./Button";
import gsap from 'gsap';
import Image from 'next/image';

export default function Section({ direction , title , description , subtitle , style , translate , image }){
    
    const [inViewRef, inView] = useInView({
        threshold : 0,
        triggerOnce: true
    });

    const ref = useRef();
    const spans = useRef([]);

    const timeline = useRef(gsap.timeline({paused : true}))

    const setRefs = useCallback(
        (node) => {
          // Ref's from useRef needs to have the node assigned to `current`
          ref.current = node;
          // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
          inViewRef(node);
        },
        [inViewRef],
    );

    useLayoutEffect(() => { 
       spans.current = title.split(' ')
       gsap.set(ref.current.querySelector('.feature-cover') , {
            translateX : `${translate}%`,
            translateZ : '1px'
       })
    },[])

    if(inView){
        timeline.current.add(
            gsap.to(ref.current.querySelector('.feature-cover') ,
             {
                translateZ : '0px',
                translateX : '0%',
                ease : "power1.inOut",
                duration: 0.8,
            }))
            timeline.current.add(gsap.to(ref.current.querySelectorAll('span span') ,
            {
                stagger: 0.01,
                translateZ : '0px',
                translateY : "0%",
                ease : "power1.inOut",
                duration: 0.8
            }),'-=0.6')
        timeline.current.add(gsap.to([ref.current.querySelector('.description') , ref.current.querySelector('.cta')] , {
                autoAlpha : 1,
                translateZ : '1px',
                translateY : 0,
                ease : "power1.inOut",
                duration: 0.8,
                stagger: 0.1
        }), '-=0.6')
        
       
    timeline.current.play();

    }

    return (
        <div className={`w-full md:h-screen my-20 md:my-40 flex flex-col p-2 md:p-0 ${direction} justify-between items-center`} ref = {setRefs}>
            <div className='flex-1'>    
                <span className="block overflow-hidden uppercase text-[#f896ff] font-medium mb-5 text-sm md:text-md">
                    <span className="translate-y-[110%] block translate-z-px will-change-transform">{subtitle}</span>
                </span>
                <h3 className="font-black text-4xl mb-8 text-gray-200">
                    {spans.current.length !== 0 && spans.current.map((item , index)  => (
                        <span className="mr-2 overflow-hidden inline-block " key={`${item}-${index}`}>
                            <span className="translate-y-[110%] block translate-z-px will-change-transform ">{item}</span>
                        </span>
                    ))} 
                </h3>
                <p className="text-lg description font-regular mb-10 text-gray-400 w-10/12 will-change-transform translate-y-3/4 opacity-0">
                    {description}
                </p>    
                <div className="cta will-change-transform translate-y-3/4 opacity-0">
                    <Button text= "Create your social graphic now" url="/editor" animate = {false} />
                </div>
            </div>
            <div  className={`will-change-transform relative feature-cover w-full h-[60vh] lg:flex-1 lg:h-[70vh] rounded-lg ${style}`}>
                    <Image 
                        layout='fill'
                        priority
                        objectFit='contain'
                        src = {`/images/${image}.webp`}
                        alt = {`${image} template image`}
                    />
            </div>
        </div>
    )
}