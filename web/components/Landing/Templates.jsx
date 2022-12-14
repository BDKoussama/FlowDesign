import Button from "./Button";
import Description from "./Description";
import Title from "./Title";

export default function Templates(){

   


    return (
        <div className='w-full text-center pt-20 relative' >
            <Title text = "Explore eye-catching templates" />
            <Description text="Browse through thousands of professionally designed templates for social posts, banners, campaigns, and more. Specify your search based on platform, aesthetic, mood, color, event, or theme." />
            <div className='w-full overflow-hidden h-[80vh] flex items-center justify-center my-20'>
                <div className='flex flex-row items-center w-[200vw]'  data-scroll data-scroll-speed = "2" data-scroll-direction = "horizontal">
                    <div className='h-[70vh] w-[35vw] bg-gray-500 m-5 rounded-lg '></div>
                    <div className='h-[70vh] w-[35vw] bg-gray-500 m-5 rounded-lg '></div>
                    <div className='h-[70vh] w-[35vw] bg-gray-500 m-5 rounded-lg '></div>
                    <div className='h-[70vh] w-[35vw] bg-gray-500 m-5 rounded-lg '></div>
                </div>
            </div>
            <Button text= "Create your social graphic now" url = '/editor' style= "mt-10" />
         </div>
    )
}