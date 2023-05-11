import Container from "../Layout/Container";
import Description from "./Description";
import Section from "./Section";
import Title from "./Title";
import FeatureItem from "./FeatureItem";
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

export default function Features(){

    const data = [
        { text : "Social media templates that are easy to adjust" , icon : "grid" },
        { text : "Upload your own images and brand colorsand create engaging social media posts" , icon : "upload"},
        { text : "High-quality stock photos and other amazing design elements" , icon : "gallery"}
    ]

    const { ref, inView, entry } = useInView({
        threshold: 0.5
    });

    if(inView){
        gsap.to( entry.target.querySelectorAll('.feature-item') ,
            {
            autoAlpha : 1,
            translateZ : '1px',
            translateY : 0,
            ease : "power1.inOut",
            duration: 0.8,
            stagger: 0.125
        })
    }

    return (
       <div className="">
             <Container>

                <div className='w-full text-center pt-60 relative ' ref = {ref} id = "features">
                    <Title text = "Unleash Your Imagination" />
                    <Description text="Just launch the editor for free on your desktop or mobile device to start creating your graphic"/>
                    <div className='w-full flex  flex-col  items-center md:flex-row justify-between md:items-start mt-20  p-5'>
                        { data.map((item , index) => ( <FeatureItem key={index.toString()} text = {item.text} icon = {item.icon} /> )) }
                    </div>
                </div>

            <Section 
                title= "Select from professionally designed social media templates "
                subtitle = "get started fast"
                description= "Browse through professionally designed templates for social posts, banners, campaigns, and more."
                direction= "lg:flex-row"
                style= "lg:ml-28 mt-10 lg:mt-0" 
                translate = {50}
                image = "templates"
            />


            <Section 
                title= "Customize your social graphic templates with a few clicks"
                subtitle = "easy-to-use interface"
                description= "Easily modify your design for any of your social platforms. Drag & drop different shapes , images and text"
                direction= "lg:flex-row-reverse"
                style= "lg:mr-28 mt-10 lg:mt-0"
                translate = {-50}
                image = "interface"
            />

            <Section 
                title= "Search across any keyword and select from photos , stickers and icons"
                subtitle = "FULLY CUSTOMIZABLE"
                description= "An extensive collection of high-resolution photos to help marketers spice up their social graphics and create images that bring lifee to their social media presence."
                direction= "lg:flex-row"
                style= "lg:ml-28 mt-10 lg:mt-0"
                translate = {50}
                image = "photos"
            />

            <Section 
                title= "Save and share your social media graphics"
                subtitle = "ONE CLICK AWAY FROM THE WORLD"
                description= "Instantly download your finished product to your device and you’re ready to share."
                direction= "lg:flex-row-reverse"
                style= "lg:mr-28 mt-10 lg:mt-0"
                translate = {-50}
                image = "download"
            />

        </Container>
       </div>
    )
}