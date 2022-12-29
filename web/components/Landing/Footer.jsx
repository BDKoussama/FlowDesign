import Container from "../../components/Layout/Container"
import Logo from "../Svg/Logo";
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { useCallback , useRef , useLayoutEffect} from "react";
import Link from 'next/link';

export default function Footer({text = 'Create Unique social media graphics .'}){
    
    const [inViewRef, inView] = useInView({
        threshold : 0.2
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
       spans.current = text.split(' ')
    },[])

    if(inView){

      

        timeline.current.add(
            gsap.to( ref.current.querySelectorAll('span span'),{
                stagger: 0.01,
                translateZ : '0px',
                translateY : 0,
                ease : "power1.inOut",
                duration: 0.8
            })
        )
        timeline.current.add(
            gsap.to( ref.current.querySelectorAll('li'),{
                stagger: 0.125,
                translateZ : '0px',
                autoAlpha: 1,
                translateX : 0,
                ease : "power1.inOut",
                duration: 0.8
            }) , "-=0.6")
            timeline.current.add(
                gsap.to( ref.current.querySelectorAll('p'),{
                    stagger: 0.125,
                    translateZ : '0px',
                    autoAlpha: 1,
                    translateX : 0,
                    ease : "power1.inOut",
                    duration: 0.6
                }) , "-=0.6")

        timeline.current.play();    
    }


    return (
        <div className="pb-5 -mt-8 pt-20 bg-[#0f0f0f]" ref = {setRefs}>
            <Container>
                <div className='h-full lg:h-[50vh] flex flex-col lg:flex-row lg:items-center lg:px-40'>
                        <div className="flex-1 w-[60%]">
                            <Logo height={75} width = {65}/>
                            <h3 className="text-2xl font-semibold mt-5  lg:w-7/12 text-white">
                                {spans.current.length !== 0 && spans.current.map((item , index)  => (
                                    <span className="mx-1 overflow-hidden inline-block " key={`${item}-${index}`}>
                                        <span className="translate-y-[110%] block translate-z-px will-change-transform">{item}</span>
                                    </span>
                                ))} 
                            </h3>
                            <div className=" mt-10 lg:mt-32 flex flex-row text-gray-700">
                                <p className="text-sm mr-4 opacity-0 translate-x-[100px]">Privacy Policy</p>
                                <p className="text-sm mr-4 opacity-0 translate-x-[100px]">Terms & Conditions</p>
                            </div>
                        </div>
                        <div className=" w-[40%] h-full">    
                            <div className=" mt-[20px] lg:mt-[110px] flex flex-col lg:flex-row">
                                <ul className="mr-10">
                                    <li className="text-2xl mb-5 block mr-5 opacity-0 translate-x-[100px] text-white">
                                        <Link href = "/">
                                            <a>
                                                <span className="font-semibold">Home</span>
                                            </a>
                                        </Link>
                                    </li>
                                    <li data-scroll-to className="text-2xl mb-5 block mr-5 opacity-0 translate-x-[100px] text-white">
                                        <Link href = "#templates">
                                            <a href = "#templates" data-scroll-to><span className="font-semibold">Templates</span></a>
                                        </Link>
                                    </li>
                                    <li className="text-2xl mb-5 block mr-5 opacity-0 translate-x-[100px] text-white">
                                        <span className="font-semibold">Get Stared</span>
                                    </li>
                                </ul>
                                <ul className="mr-10">
                                    <li className="text-2xl mb-5 block mr-5 opacity-0 translate-x-[100px]  text-white">
                                        <Link href = "#features">
                                            <a href="#features" data-scroll-to>
                                                <span className="font-semibold">Features</span>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="text-2xl mb-5 block mr-5 opacity-0 translate-x-[100px] text-white">
                                        <Link href = "#faq">
                                            <a href="#faq" data-scroll-to>
                                                <span className="font-semibold">Faq</span>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
            </Container>
        </div>
    )
}