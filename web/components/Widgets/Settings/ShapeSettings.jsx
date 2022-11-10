import {Label , TextInput} from 'flowbite-react';
import ColorPicker from '../../Layout/ColorPicker';

import {useDispatch , useSelector} from 'react-redux';
import { updateSelected } from '../../../app/features/canvas/selectSlice';


export default function ShapeSettings(){

    const dispatch = useDispatch();

    const {attrs} = useSelector(state => state.selected.item)
    

    const handleInputChange = (e) => {
        const {name , value} = e.target;

        console.log(typeof value)
        dispatch(updateSelected({
            attrs : {
                ...attrs,
                [name]: Number(value)
            }
        }))
    }

    const handleFillChange = (color) => {
        dispatch(updateSelected({
            attrs : {
                ...attrs,
                fill: color
            }
        }))
    }

    const handleStrokeChange = (color) => {
        dispatch(updateSelected({
            attrs : {
                ...attrs,
                stroke : color
            }
        }))
    }

    return (
        <div className='p-4'>
            <div className="w-full mt-10">
                <span className='text-2xl font-bold'>Layout</span>

                <div className='flex justify-between items-center gap-5 my-4'>
                    <div className='input-group'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="x"
                                value="X"
                                className='text-white'
                            />
                        </div>
                            <TextInput
                                value={attrs.x || 0}
                                id="x"
                                type="number"
                                name='x'
                                placeholder="X position"
                                onChange={handleInputChange}
                        />
                    </div>
                    <div className='input-group'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="y"
                                value="Y"
                                className='text-white'
                            />
                        </div>
                        <TextInput
                            value={attrs.y || 0}
                            id="y"
                            type="number"
                            name='y'
                            placeholder="Y position"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className='flex justify-between items-center gap-5 my-4'>
                    <div className='input-group'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="height"
                                value="Height"
                                className='text-white'
                            />
                        </div>
                        <TextInput
                            value={attrs.height || 0}
                            id="height"
                            type="number"
                            name='height'
                            placeholder="Height"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='input-group'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="width"
                                value="Width"
                                className='text-white'
                            />
                        </div>
                        <TextInput
                            value={attrs.width || 0}
                            id="width"
                            type="number"
                            name='width'
                            placeholder="Width"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <span className='text-2xl font-bold'>Colors</span>

                <div className='input-group my-4'>
                    <div className="mb-2 block mt-2">
                        <Label
                            htmlFor="Fill"
                            value="Fill"
                            className='text-white'
                        />
                    </div>

                    <div>
                        <ColorPicker fill = {attrs.fill || '#000000'} onChange = {handleFillChange} position = "bottom"/>
                    </div>
                </div>

                <span className='text-2xl font-bold'>Effects</span>

                <div className='flex justify-between items-center my-4'>
                    <div className='input-group w-full'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="cornerRadius"
                                value="Border Radius"
                                className='text-white'
                            />
                        </div>
                            <TextInput
                                value={attrs.cornerRadius || 0}
                                id="cornerRadius"
                                type="number"
                                name='cornerRadius'
                                placeholder="Border Radius"
                                onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className='flex justify-between items-center gap-5 my-4'>
                    <div className='input-group'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="Stroke Color"
                                value="Stroke Color"
                                className='text-white'
                            />
                        </div>
                        <ColorPicker fill = {attrs.stroke || '#000000'} onChange = {handleStrokeChange} position = "top"/>
                    </div>
                    <div className='input-group'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="stroke"
                                value="Stroke"
                                className='text-white'
                            />
                        </div>
                            <TextInput
                                value = {attrs.strokeWidth || 0}
                                id="stroke"
                                name='strokeWidth'
                                type="number"
                                placeholder="Stroke Width"
                                onChange={handleInputChange}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}