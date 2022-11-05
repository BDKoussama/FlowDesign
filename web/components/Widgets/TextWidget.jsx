
import {useDispatch} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addShape } from '../../app/features/canvas/stageSlice';

const buttonSettings = [
    {   
        id : 'btn-heading',
        title : 'Create Heading',
        fontSize : 60 ,
        text : 'Heading Text',
        size : 'text-2xl'
    },
    {
        id: 'btn-subheading',
        title : 'Create Sub Header',
        fontSize : 30 ,
        text : 'Subheading Text',
        size : 'text-lg'
    },
    {
        id : 'btn-paragraph',
        title : 'Create Paragraph Text',
        fontSize : 20 ,
        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac odio nibh. Suspendisse justo ligula, finibus sit amet lobortis a, venenatis a justo.',
        size : 'text-sm'

    }
]

export default function TextWidget(){
    
    const dispatch = useDispatch();

    const addTextElement = (props) => {

        const id = uuidv4()

        const attrs = {
            ...props , 
            fill : '#000000',
            type : 'Text',
            y : 20,
            x : 20,
            width: 400,
            draggable : true,
            id,
            fontStyle : '  ',
            textDecoration : '',
            align: 'center',
            stroke : '#000000',
            strokeWidth : 0,
            opacity : 1,
            lineHeight : 1,
            scaleX : 1,
            scaleY : 1,
            shadowColor : '#000000',
            shadowBlur : 0,
            shadowOffset : { x: 0 , y : 0},
            name : 'object',
        }

        dispatch(addShape({
            className : 'Text',
            attrs
        }))
    }

    return(
        <div>
            <h3>Create Text Element</h3>
            <div className='text-widget mt-10'>
                <ul>
                    {buttonSettings.map(item => (
                        <li className="my-2 text-center rounded bg-[#313f45]" key = {item.id}>
                            <button 
                                className= {`${item.size} w-full py-3`} 
                                onClick={() => addTextElement({fontSize : item.fontSize  , text : item.text})}
                            >
                                { item.title }
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}