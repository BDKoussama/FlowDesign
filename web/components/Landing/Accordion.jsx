import { useRef  , useEffect,useState } from "react";
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';


const panels = [
	{
		label: 'Seriously, Don\'t Use Icon Fonts',
		content: 'Icons are everywhere. These "little miracle workers" (as John Hicks described them) help us reinforce meaning in the interfaces we design and build. Their popularity in web design has never been greater; the conciseness and versatility of pictograms in particular make them a lovely fit for displays large and small. But icons on the web have had their fair share of challenges.',
	},
	{
		label: 'Screen Readers Actually Read That Stuff',
		content: 'Most assistive devices will read aloud text inserted via CSS, and many of the Unicode characters icon fonts depend on are no exception. Best-case scenario, your "favorite" icon gets read aloud as "black favorite star." Worse-case scenario, it\'s read as "unpronounceable" or skipped entirely.',
	},	
	{
		label: 'They Fail Poorly and Often',
		content: 'When your icon font fails, the browser treats it like any other font and replaces it with a fallback. Best-case scenario, you\'ve chosen your fallback characters carefully and something weird-looking but communicative still loads. Worse-case scenario (and far more often), the user sees something completely incongruous, usually the dreaded "missing character" glyph.',
	},
	{
		label: 'They\'re a Nightmare if You\'re Dyslexic',
		content: 'Many dyslexic people find it helpful to swap out a website\'s typeface for something like OpenDyslexic. But icon fonts get replaced as well, which makes for a frustratingly broken experience.',
	},
	{
		label: 'There\'s Already a Better Way',
		content: 'SVG is awesome for icons! It\'s a vector image format with optional support for CSS, JavaScript, reusability, accessibility and a bunch more. It was made for this sort of thing.'
	},
];


export function Panel({activeTab , index , label , content , activateTab}){
    
    const [height , setHeight] = useState(0);

    const ref = useRef();

    useEffect(() => {
        if(typeof window !== undefined){
            window.setTimeout(() => {
                const height = ref.current.querySelector('.panel__inner').scrollHeight;
                setHeight(height)
            }, 333);
        }
    },[])

	

    const isActive = activeTab === index; 

    const innerStyle = {
        height:  `${isActive ? height : 0}px`
    }

    return(
        <div  ref = {ref} className='panel will-change-transform translate-y-full ' role='tabpanel' aria-expanded={ isActive }>
			<button className='panel__label' role='tab' onClick={ activateTab }>
				<h4 className="text-2xl text-black font-medium">{ label }</h4>
			</button>
			<div className='panel__inner' style={ innerStyle } aria-hidden={ !isActive }>
				<p className='panel__content text-left text-lg'> { content } </p>
			</div>
		</div>
    )
}


export default function Accordion(){

    const[activeTab , setActiveTab] = useState(0);

	const { ref, inView, entry } = useInView({
        threshold: 0.2
    });


    if(inView){
        gsap.to(entry.target.querySelectorAll('.panel') ,
            {
            translateZ : '1px',
            translateY : 0,
            ease : "power1.inOut",
            duration: 1.2,
			stagger: 0.2
        })
    }

    const activateTab = (index) => {
        setActiveTab(activateTab === index ? -1 : index)
    }
   
    return(
        <div className='accordion' role='tablist' ref = {ref}>
				{panels.map((panel, index) =>
					<Panel
						key={ index }
						activeTab={ activeTab }
						index={ index }
						{ ...panel } 
						activateTab={ () => {activateTab(index)} }
					/>
				)}
	    </div>
    )
}