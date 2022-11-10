import { EyeIcon, Square2StackIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useSelector , useDispatch} from "react-redux"
import { setSelected } from "../../app/features/canvas/selectSlice";

export default function Layers(){

    const {children} = useSelector(state => state.stage)
    const selected = useSelector(state => state.selected)

    const dispatch = useDispatch();

    console.log(children)

    return(
        <div className="p-4">
            Layers
            <ul className="mt-10 w-full">
                {children.length !== 0 && children.map(item => {
                    return (
                        <li key={item.attrs.id} className = 'my-2' >
                            <button className="bg-gray-700 hover:bg-gray-900 w-full h-full p-2 rounded flex justify-between items-center"
                                style={{ backgroundColor : `${item.attrs.id === selected.item.id ? 'rgb(17 24 39)' : ''}` }}
                                onClick={() => { dispatch(setSelected({
                                id : item.attrs.id,
                                type : item.attrs.type,
                                attrs : item.attrs
                                })) 
                            }}>

                                <div>
                                    <span className="block text-sm text-gray-400">{ item.className }</span>
                                </div>

                                <div className="flex justify-between items-center w-20">
                                    <span className="block">
                                        <TrashIcon className="h-5 w-5 text-white"/>
                                    </span>

                                    <span className="block">
                                        <Square2StackIcon className="h-5 w-5 text-white"/>
                                    </span>

                                    <span className="block">
                                        <EyeIcon className="h-5 w-5 text-white"/>
                                    </span>

                                </div>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}