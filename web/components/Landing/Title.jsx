import { useLayoutEffect , useRef  , useCallback} from "react"
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

export default function Title({text , style}) {

    const [inViewRef, inView] = useInView({
        threshold : 0.2
    });

    const ref = useRef();
    const spans = useRef([]);

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
        gsap.to( ref.current.querySelectorAll('span span') ,
            {
            stagger: 0.01,
            translateZ : '0px',
            translateY : 0,
            ease : "power1.inOut",
            duration: 0.8
        })
    }


    return (
        <h2 className= {`font-black text-gray-100    text-3xl md:text-4xl ${style}`} ref = {setRefs}>
            {spans.current.length !== 0 && spans.current.map((item , index)  => (
                <span className="mx-1 overflow-hidden inline-block " key={`${item}-${index}`}>
                    <span className="translate-y-[110%] block translate-z-px will-change-transform">{item}</span>
                </span>
            ))} 
        </h2>
    )
}