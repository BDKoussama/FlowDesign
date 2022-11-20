import Container from "../Layout/Container";
import Logo from "../Svg/Logo";
import Button from "./Button";

export default function Navbar(){
    return(
        <Container>
            <div className='py-10 z-2'>
                <nav className='flex items-center justify-between'>
                    <span className='logo flex justify-center items-center h-12 w-12'> 
                    <Logo />
                    </span>

                    <Button text= "Get Started" url = '/editor' />
                </nav>
            </div>
        </Container> 
    )
}