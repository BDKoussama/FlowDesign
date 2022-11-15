import {Label , TextInput} from 'flowbite-react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSelected } from '../../../app/features/canvas/selectSlice';
import ColorPicker from '../../Layout/ColorPicker';

export default function ImageSettings(){

    const dispatch = useDispatch();
    
    const { attrs } = useSelector(state => state.selected.present.item)

    const handleInputChange = (e) => {
        const {name , value} = e.target;
        dispatch(updateSelected({
            attrs : {
                ...attrs,
                [name]: Number(value)
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

    const handleShadowChange = (color) => {
        dispatch(updateSelected({
            attrs : {
                ...attrs,
                shadowColor : color
            }
        }))
    }

    return (
        <div className="h-screen overflow-y-scroll pb-10 p-4"> 
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

                <span className='text-2xl font-bold'>Effects</span>
                
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

                <div className='my-4'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="rotatio"
                            value="Rotation"
                        />
                    </div>
                    <TextInput
                        value = {attrs.rotation || 0}
                        id="rotation"
                        name='rotation'
                        type="number"
                        step={1}
                        min={-360} 
                        max={360}
                        placeholder="Image Rotation"
                        onChange={handleInputChange}
                    />
                     
                </div>

                <div className='my-4'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="opacity"
                            value="Opacity"
                        />
                    </div>
                    <TextInput
                        value = {attrs.opacity || 1}
                        id="opacity"
                        name='opacity'
                        type="number"
                        step={0.01}
                        min={0} 
                        max={1}
                        placeholder="Text Opacity"
                        onChange={(e) => { 
                            const {name , value} = e.target;
                            const opacity = parseFloat(value)
                            if(!isNaN(opacity) && opacity <= 1){
                                dispatch(updateSelected({
                                    attrs : {
                                        ...attrs,
                                        [name]: opacity
                                    }
                                }))
                            }
                         }}
                    />  
                </div>

                <div className='my-4'>
                    <div className='input-group'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="ShadowColor"
                                value="Shadow Color"
                                className='text-white'
                            />
                        </div>
                        <ColorPicker fill = {attrs.shadowColor || '#000000'} onChange = {handleShadowChange} position = "top"/>
                    </div> 
                </div>

                <div className='flex justify-between items-center my-4 gap-5'>
                    <div className='input-group'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="shadowBlur"
                                value="Blur"
                                className='text-white'
                            />
                        </div>
                            <TextInput
                                value = {attrs.shadowBlur || 0}
                                id="shadowBlur"
                                name='shadowBlur'
                                type="number"
                                placeholder="blur"
                                onChange={handleInputChange}
                        />
                    </div>

                    <div className='input-group'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="shadowOffsetX"
                                value="Offset X"
                                className='text-white'
                            />
                        </div>
                            <TextInput
                                value = {attrs.shadowOffsetX || 0}
                                id="offsetx"
                                name='shadowOffsetX'
                                type="number"
                                placeholder="offset x"
                                onChange={handleInputChange}
                        />
                    </div>

                    <div className='input-group'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="shadowOffsetY"
                                value="Offset Y"
                                className='text-white'
                            />
                        </div>
                            <TextInput
                                value = {attrs.shadowOffsetY || 0}
                                id="offsety"
                                name='shadowOffsetY'
                                type="number"
                                placeholder="offset y"
                                onChange={handleInputChange}
                        />
                    </div>

                </div>

            </div>
        </div>
    )
}