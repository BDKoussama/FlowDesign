import {Label , TextInput} from 'flowbite-react';
import { useState } from 'react';
import ColorPicker from '../../Layout/ColorPicker';

export default function ShapeSettings(){

    const [fill , setFill] = useState();

    return (
        <div>
            <div className="w-full mt-10">
                <span className='text-2xl font-bold'>Layout</span>

                <div className='flex justify-between items-center gap-5 my-4'>
                    <div className='input-group'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="X"
                                value="X"
                                className='text-white'
                            />
                        </div>
                            <TextInput
                            id="x"
                            type="number"
                            placeholder="X position"
                        />
                    </div>
                    <div className='input-group'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="Y"
                                value="Y"
                                className='text-white'
                            />
                        </div>
                        <TextInput
                            id="y"
                            type="number"
                            placeholder="Y position"
                        />
                    </div>
                </div>

                <div className='flex justify-between items-center gap-5 my-4'>
                    <div className='input-group'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="Height"
                                value="Height"
                                className='text-white'
                            />
                        </div>
                        <TextInput
                            id="height"
                            type="number"
                            placeholder="Height"
                        />
                    </div>
                    <div className='input-group'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="Width"
                                value="Width"
                                className='text-white'
                            />
                        </div>
                        <TextInput
                            id="width"
                            type="number"
                            placeholder="Width"
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
                        <ColorPicker fill = {fill} setFill = {setFill} position = "bottom"/>
                    </div>
                </div>

                <span className='text-2xl font-bold'>Effects</span>

                <div className='flex justify-between items-center my-4'>
                    <div className='input-group w-full'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="Border Radius"
                                value="Border Radius"
                                className='text-white'
                            />
                        </div>
                            <TextInput
                                id="radius"
                                type="number"
                                placeholder="Border Radius"
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
                        <ColorPicker fill = {fill} setFill = {setFill} position = "top"/>
                    </div>
                    <div className='input-group'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="Stroke"
                                value="Stroke"
                                className='text-white'
                            />
                        </div>
                            <TextInput
                                id="stroke"
                                type="number"
                                placeholder="Stroke"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}