import Image from "next/image";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import gsap from 'gsap';

export default function HeroiIcons(){

    const ref = useRef(null)

    useLayoutEffect(() => {
        if(ref.current !== null) {
            gsap.fromTo(ref.current.querySelectorAll('.h-icon') , {
                scale: 0.001,
                translateZ: '1px'
            } , 
            {
                scale: 1,
                translateZ: '0px',
                ease : "power1.inOut",
                duration : 0.8,
                stagger : 0.02
            })
        }
    },[])

    return(
        <div ref = {ref} className = 'z-0 hidden'>
               <div   className='h-16 w-16 md:h-20 md:w-20 absolute top-28 md:top-40 left-16 md:left-32' data-scroll data-scroll-speed = "1.2">
                   <div className='h-full w-full relative h-icon'>
                       <Image src="/images/icons/facebook.png" alt = "facebook icon" layout='fill' priority/>
                   </div>
               </div>

               <div className='h-16 w-16 md:h-20 md:w-20 absolute top-[35%] right-[8%] md:top-[25%] md:right-[20%]' data-scroll data-scroll-speed = "1.5">
                   <div className='h-full w-full relative h-icon'>
                       <Image src="/images/icons/instagram-logo.png" alt = "Instagram icon" layout='fill' priority/>
                   </div>
               </div>

               <div className='h-12 w-12 md:h-16 md:w-16 absolute top-40 right-8   md:top-40 md:right-32' data-scroll data-scroll-speed = "1.2">
                   <div className='h-full w-full relative h-icon'>
                       <Image src="/images/icons/twitter.png" alt = "Twitter icon" layout='fill' priority/>
                   </div>
               </div>

               <div className='h-12 w-12 md:h-16 md:w-16 absolute top-[35%] left-12 md:top-[28%] md:left-72 ' data-scroll data-scroll-speed = "1.5" >
                   <div className='h-full w-full relative h-icon'>
                       <Image src="/images/icons/youtube-logo.png" alt = "youtube icon" layout='fill' priority/>
                   </div>
               </div>
        </div>
    )
}