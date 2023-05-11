import Container from "../Layout/Container";
import Accordion from "./Accordion";
import Title from "./Title";

export default function Faq(){
    return(
        <div className="bg-gray-900">
            <Container >
                <div className='text-center h-full md:h-[150vh] py-20 ' id = "faq">
                    <Title text="Frequently asked questions" style= "text-slate-200"/>
                    <div className='w-full mt-20 lg:w-9/12 mx-auto'>
                        <Accordion />
                    </div>
                </div>
            </Container>
        </div>
    )
}