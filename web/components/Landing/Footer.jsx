import Container from "../../components/Layout/Container"
import Logo from "../Svg/Logo";

export default function Footer(){
    
    return (
        <div className="py-20 bg-gray-200">
            <Container>
                <div className='h-[70vh] flex flex-row px-20'>
                        <div className="flex-1 w-[50%]">
                            <Logo height={95} width = {75}/>
                            <h3 className="text-2xl font-bold mt-5 w-7/12">Create Unique social media graphics .</h3>
                            <div className="mt-48">
                                <p>Privacy Policy</p>
                            </div>
                        </div>
                        <div className="flex-1 w-[50%]">

                        </div>
                </div>
            </Container>
        </div>
    )
}