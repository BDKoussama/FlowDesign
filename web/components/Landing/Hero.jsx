import Container from "../Layout/Container";
import Button from "./Button";
import Image from 'next/image';
import { useRef , useLayoutEffect } from "react";
import gsap from 'gsap';
import {BlobRight} from "../Landing/index";

export default function Hero({heading , description}){
    
    const hero = useRef();
    const headingSpans = useRef(heading.split(' ') || []);
    const descSpans = useRef(description.split(' ') || []);

    useLayoutEffect(() => {
        if(headingSpans.current.length !== 0){
            gsap.to(hero.current.querySelectorAll('span span') ,
                {
                    stagger: 0.01,
                    translateZ : '0px',
                    translateY : 0,
                    ease : "power1.inOut",
                    duration: 0.8
                })
        }

    },[])

    return(
        <Container> 
            <div className='hero w-full text-center z-2 ' ref = {hero}>
                <h1 className='text-[8vw] md:text-[5vw] font-bold mt-0 leading-snug w-10/12 mx-auto text-slate-200 capitalize'> 
                    {headingSpans.current.length !== 0 && headingSpans.current.map((item , index)  => (
                        <span className="mx-2 overflow-hidden inline-block " key={`${item}-${index}`}>
                            <span className="translate-y-[110%] block translate-z-px will-change-transform">{item}</span>
                        </span>
                    ))} 
                </h1>
                <p className='mt-5 w-11/12 lg:w-7/12 mx-auto text-md lg:text-lg h-d text-slate-400	' >
                    {descSpans.current.length !== 0 && descSpans.current.map((item , index)  => (
                        <span className="mx-0.5 overflow-hidden inline-block " key={`${item}-${index}`}>
                            <span className="translate-y-[110%] block translate-z-px will-change-transform">{item}</span>
                        </span>
                    ))} 
                </p>
                <div className="">
                    <Button text= "Create your social graphic now" url = '/editor' style= "mt-10" />
                    <Button text= "Check On Github" url = '/editor' style= "mt-10 md:ml-10 to-[transparent] from-[transparent] text-white border-2" />
                </div>
            </div>
            <div className='w-full mt-20 relative relative'>
                <div className="gradient-blob absolute h-[60%] w-[80%]"></div>
                <Image 
                    layout='responsive'
                    height="70%"
                    width="100%"
                    objectFit='contain'
                    src = '/images/app.webp'
                    alt = 'app editor screen shot'
                />
             </div>
    </Container>
    )
}
