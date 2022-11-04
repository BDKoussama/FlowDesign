import { Facebook , Twitter , Instagram , Youtube } from '../Svg/index';

export default function Resize(){
    return(
        <div>
            <h3>
                Resize
            </h3>

            <ul className='resize-widget_list'>
                <li className=''> 
                    <div className='h-6 w-6 relative'>
                        <Facebook fill= "#fff" height="100%" width = "100%"/>
                    </div>
                </li>
            </ul>
        </div>
    )
}