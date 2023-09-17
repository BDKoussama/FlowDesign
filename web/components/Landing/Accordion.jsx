import { useRef  , useEffect,useState } from "react";
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';


const panels = [
	{
		label: 'What is FlowDesign?',
		content: 'FlowDesign is a tool that allows users to create beautiful designs and graphics with ease. It has a variety of templates and design elements that users can customize to fit their needs.',
	},
	{
		label: 'Is the app free?',
		content: 'FlowDesign is open source and available for free on GitHub. You can download the source code and use it to create your own version of the app. While the app itself is free, there may be costs associated with hosting and maintaining your own version of the app. We encourage users to contribute to the open source community and help improve the app for everyone.',
	},	
	{
		label: 'What design formats does your graphic app support?',
		content: 'Currently the App supports only two formats , PNG and JPEG',
	},
	{
		label: 'Can I use FlowDesign app to design social media posts?',
		content: 'Yes, you can use the app to design social media posts. It has templates that are specifically designed for different social media platforms, including Facebook, Instagram, Twitter, and Youtube.',
	},
	{
		label: 'Is it easy to use the app?',
		content: 'Yes, the app is designed to be user-friendly and easy to use. It has a simple and intuitive interface, and users can easily customize templates and design elements to fit their needs.'
	},
	{
		label: 'Can I save my designs and come back to them later?	',
		content: 'Unfortunately, the app does not currently have a save feature that allows users to save their designs and come back to them later. '
	},
	{
		label: 'Can I use my own images in my designs?',
		content: 'Yes, you can use your own images in your designs. the app allows users to upload their own images and use them in their designs.'
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
				<h4 className="text-2xl text-black font-medium text-slate-200">{ label }</h4>
			</button>
			<div className='panel__inner' style={ innerStyle } aria-hidden={ !isActive }>
				<p className='panel__content text-left text-lg text-slate-400'> { content } </p>
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