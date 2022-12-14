import Container from "../Layout/Container";
import Logo from "../Svg/Logo";
import Button from "./Button";

export default function Navbar(){
    return(
        <Container>
            <div className='py-10 z-2'>
                <nav className='flex items-center justify-between'>
                    <span className='logo flex justify-center items-center h-12 w-12'> 
                        <Logo height={45} width = {30} />
                    </span>

                    <ul>
                        <li className="inline-block mr-5"><span className="font-semibold">Home</span></li>
                        <li className="inline-block mr-5"><span className="font-semibold">Templates</span></li>
                        <li className="inline-block mr-5"><span className="font-semibold">Features</span></li>
                        <li className="inline-block mr-5"><span className="font-semibold">Faq</span></li>
                        <li className="inline-block mr-5"><Button text= "Get Started" url = '/editor' animate = {false} /></li>
                    </ul>
                </nav>
            </div>
        </Container> 
    )
}