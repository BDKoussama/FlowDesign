import Container from "../Layout/Container";
import Accordion from "./Accordion";
import Title from "./Title";

export default function Faq(){
    return(
        <Container >
            <div className='my-60 text-center'>
              <Title text="Frequently asked questions" />
                <div className='w-full mt-20 lg:w-9/12 mx-auto mb-96'>
                    <Accordion />
                </div>
                 <div className='h-screen'>

                </div>
            </div>
        </Container>
    )
}