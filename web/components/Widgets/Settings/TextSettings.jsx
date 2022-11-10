import {Label , TextInput , Textarea , Select , Button , Tooltip} from 'flowbite-react'
import {useDispatch , useSelector} from 'react-redux';
import ColorPicker from '../../Layout/ColorPicker';
import { Bars3Icon , Bars3BottomLeftIcon , Bars3BottomRightIcon } from '@heroicons/react/24/outline'
import {UpperCase , Underline , Bold , ItalicText , StrikeText } from '../../Svg/index'
export default function TextSettings(){

    const dispatch = useDispatch();
    const {attrs} = useSelector(state => state.selected.item)

    const handleInputChange = (e) =>{

    }

    const handleFillChange = () => {

    }


    const handleStrokeChange = () => {

    }

    return (
        <div className='h-screen overflow-y-scroll pb-10'>
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

                <span className='text-2xl font-bold'>Font</span>

                <div className='my-4' id="textarea">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="text"
                            value="Your text"
                        />
                    </div>
                    <Textarea
                        id="comment"
                        placeholder="Text here..."
                        rows={4}
                    />
                </div>

                <div className='flex justify-between items-center gap-5 my-4'>
                        <div className='input-group'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="fontSize"
                                    value="Font Size"
                                    className='text-white'
                                />
                            </div>
                            <TextInput
                                value={attrs.fontSize || 0}
                                id="fontSize"
                                type="number"
                                name='fontSize'
                                placeholder="Font Size"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className='input-group'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="Text Color"
                                    value="Text Color"
                                    className='text-white'
                                />
                            </div>

                            <div>
                                <ColorPicker fill = {attrs.fill || '#000000'} onChange = {handleFillChange} position = "bottom"/>
                            </div>
                        </div>
                        
                </div>

                <div className='my-4'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="fontFamily"
                            value="Font Family"
                        />
                    </div>

                    <Select id="fontFamily">
                        <option>Roboto</option>
                        <option> Satoshi </option>
                        <option>Helvetica NNeue</option>
                        <option> Raleway</option>
                    </Select>
                    
                </div>

                <div className='flex justify-between items-center gap-5 my-4'>
                    <div className='input-group'>
                        <div className='mb-2 block'>
                            <Label htmlFor='textAlignment' value = "Alignment" />
                        </div>
                        <Button.Group>
                            <Button color="gray">
                                <Bars3BottomLeftIcon className="h-4 w-4" />
                            </Button>
                            <Button color="gray">
                                <Bars3Icon className="h-4 w-4" />
                            </Button>
                            <Button color="gray">
                                <Bars3BottomRightIcon className="h-4 w-4" />
                            </Button>
                        </Button.Group>
                    </div>


                    <div className='input-group'>
                        <div className='mb-2 block'>
                            <Label htmlFor='lineHeight' value = "Line Height" />
                        </div>
                        <TextInput
                            value={attrs.lineHeight || 0}
                            id="lineHeight"
                            type="number"
                            name='lineHeight'
                            placeholder="Line Height"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className='flex justify-between items-center gap-5 my-4'>
                    <div className='input-group'>
                        <div className='mb-2 block'>
                            <Label htmlFor='textDecoration' value = "Text Decoration" />
                        </div>
                        <Button.Group>
                            <Button color="gray">
                                    <Tooltip content="Uppercase">
                                        <UpperCase fill = '#fff' height= "16px" width= "16px" />
                                    </Tooltip>
                                </Button>
                            <Button color="gray">
                                <Bars3Icon className="h-4 w-4" />
                            </Button>
                            <Button color="gray">
                                <Underline fill = '#fff' height= "16px" width= "16px" />
                            </Button>
                        </Button.Group>
                    </div>


                    <div className='input-group'>
                        <div className='mb-2 block'>
                            <Label htmlFor='textStyle' value = "Text Style" />
                        </div>
                        <Button.Group>
                            <Button color="gray">
                                <Bold fill = '#fff' height= "16px" width= "16px" />
                            </Button>
                            <Button color="gray">
                                <ItalicText fill = '#fff' height= "16px" width= "16px" />
                            </Button>
                        </Button.Group>
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
                                value="Stroke Width"
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
                            htmlFor="opacity"
                            value="Opacity"
                        />
                    </div>
                    <TextInput
                        value = {attrs.opacity || 0}
                        id="opacity"
                        name='opacity'
                        type="number"
                        placeholder="Text Opacity"
                        onChange={handleInputChange}
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
                        <ColorPicker fill = {attrs.stroke || '#000000'} onChange = {handleStrokeChange} position = "top"/>
                    </div> 
                </div>


                <div className='flex justify-between items-center my-4 gap-5'>
                    <div className='input-group'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="blur"
                                value="Blur"
                                className='text-white'
                            />
                        </div>
                            <TextInput
                                value = {attrs.strokeWidth || 0}
                                id="blur"
                                name='blur'
                                type="number"
                                placeholder="blur"
                                onChange={handleInputChange}
                        />
                    </div>

                    <div className='input-group'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="offsetx"
                                value="Offset X"
                                className='text-white'
                            />
                        </div>
                            <TextInput
                                value = {attrs.strokeWidth || 0}
                                id="offsetx"
                                name='offsetx'
                                type="number"
                                placeholder="offset x"
                                onChange={handleInputChange}
                        />
                    </div>

                    <div className='input-group'>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="offsety"
                                value="Offset Y"
                                className='text-white'
                            />
                        </div>
                            <TextInput
                                value = {attrs.strokeWidth || 0}
                                id="offsety"
                                name='offsety'
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