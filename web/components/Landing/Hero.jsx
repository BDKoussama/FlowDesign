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
                <h1 className='text-[4.5vw] font-bold mt-0 leading-snug w-10/12 mx-auto text-slate-200	'> 
                    {headingSpans.current.length !== 0 && headingSpans.current.map((item , index)  => (
                        <span className="mx-2 overflow-hidden inline-block " key={`${item}-${index}`}>
                            <span className="translate-y-[110%] block translate-z-px will-change-transform">{item}</span>
                        </span>
                    ))} 
                </h1>
                <p className='mt-5 w-11/12 lg:w-6/12 mx-auto text-md lg:text-xl h-d text-slate-400	' >
                    {descSpans.current.length !== 0 && descSpans.current.map((item , index)  => (
                        <span className="mx-0.5 overflow-hidden inline-block " key={`${item}-${index}`}>
                            <span className="translate-y-[110%] block translate-z-px will-change-transform">{item}</span>
                        </span>
                    ))} 
                </p>
                <Button text= "Create your social graphic now" url = '/editor' style= "mt-10" />
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
