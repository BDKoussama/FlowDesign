import { useLayoutEffect } from "react";
import { useRef } from "react";
import Container from "../Layout/Container";
import Logo from "../Svg/Logo";
import Button from "./Button";
import gsap from 'gsap';
import Link from 'next/link';

export default function Navbar(){

    const nav = useRef();

    useLayoutEffect(() => {
        if(nav.current){
            gsap.to(nav.current.querySelectorAll('li'), {
                duration : 0.8,
                stagger: 0.125,
                ease : "power1.inOut",
                autoAlpha: 1,
                translateX : 0
            })
        }
    } ,[])

    return(
        <Container>
            <div className='py-10 z-2'>
                <nav className='flex items-center justify-between'>
                    <Link href= "/" >
                        <a>
                            <span className='logo flex justify-center items-center h-12 w-12'> 
                                <Logo height={45} width = {30} />
                            </span>
                        </a>
                    </Link>
                    <ul ref={nav}>
                        <li className="inline-block mr-5 opacity-0 translate-x-[100px]">
                            <Link href= "/">
                                <a>
                                    <span className="font-semibold">Home</span>
                                </a>
                            </Link>
                        </li>
                        <li className="inline-block mr-5 opacity-0 translate-x-[100px]">
                            <Link href= "#templates">
                                <a href="#templates" data-scroll-to>
                                    <span className="font-semibold">Templates</span>
                                </a>
                            </Link>
                        </li>
                        <li className="inline-block mr-5 opacity-0 translate-x-[100px]">
                            <Link href= "#features">
                                <a href="#features" data-scroll-to>
                                    <span className="font-semibold">Features</span>
                                </a>
                            </Link>
                        </li>
                        <li className="inline-block mr-5 opacity-0 translate-x-[100px]">
                            <Link href= "#faq">
                                <a href="#faq" data-scroll-to>
                                    <span className="font-semibold">Faq</span>
                                </a>
                            </Link>
                        </li>
                        <li className="hidden lg:inline-block mr-5 opacity-0 translate-x-[100px]">
                            <Button text= "Get Started" url = '/editor' animate = {false} />
                        </li>
                    </ul>
                </nav>
            </div>
        </Container> 
    )
}