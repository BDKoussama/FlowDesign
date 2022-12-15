import Container from "../Layout/Container";
import Description from "./Description";
import Section from "./Section";
import Title from "./Title";
import FeatureItem from "./FeatureItem";

export default function Features(){

    const data = [
        { text : "Social media templates that are easy to adjust" },
        { text : "Upload your own images and brand colorsand create engaging social media posts"},
        { text : "High-quality stock photos and other amazing design elements"}
    ]

    return (
        <Container>
            <div className='w-full text-center mt-60 relative '>
                <Title text = "We didin't reinvent the wheel" />
                <Description text="Just Launch Designo for free on your desktop or mobile device to start creating your graphic" />
                <div className='w-full flex flex-col  items-center md:flex-row justify-between md:items-start mt-20  p-5'>
                    { data.map((item , index) => ( <FeatureItem key={index.toString()} text = {item.text} /> )) }
                </div>
            </div>

            <Section 
                title= "Select from professionally designed social media templates "
                subtitle = "get started fast"
                description= "Browse through thousands of professionally designed templates for social posts, banners, campaigns, and more. Specify your search based on platform, aesthetic, mood, color, event, or theme."
                direction= "lg:flex-row"
                style= "lg:ml-28 mt-10 lg:mt-0"
                translate = {50}
            />


            <Section 
                title= "Customize your social graphic templates with a few clicks"
                subtitle = "easy-to-use interface"
                description= "Easily modify your design for any of your social platforms. Drag & drop different shapes , images and text"
                direction= "lg:flex-row-reverse"
                style= "lg:mr-28 mt-10 lg:mt-0"
                translate = {-50}
            />

            <Section 
                title= "Search across any keyword and select from photos , stickers and icons"
                subtitle = "FULLY CUSTOMIZABLE"
                description= "An extensive collection of high-resolution photos to help marketers spice up their social graphics and create images that bring lifee to their social media presence."
                direction= "lg:flex-row"
                style= "lg:ml-28 mt-10 lg:mt-0"
                translate = {50}
            />

            <Section 
                title= "Save and share your social media graphics"
                subtitle = "ONE CLICK AWAY FROM THE WORLD"
                description= "Instantly download your finished product to your device and you’re ready to share.  Keep your branding consistent across future social graphic designs by duplicating your design and updating the content."
                direction= "lg:flex-row-reverse"
                style= "lg:mr-28 mt-10 lg:mt-0"
                translate = {-50}
            />

        </Container>
    )
}