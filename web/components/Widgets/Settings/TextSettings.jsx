import {Label , TextInput , Textarea , Select , Button , Tooltip} from 'flowbite-react'
import {useDispatch , useSelector} from 'react-redux';
import ColorPicker from '../../Layout/ColorPicker';
import { Bars3Icon , Bars3BottomLeftIcon , Bars3BottomRightIcon } from '@heroicons/react/24/outline'
import {UpperCase , Underline , Bold , ItalicText , StrikeText } from '../../Svg/index'
import { updateSelected } from '../../../app/features/canvas/selectSlice';

export default function TextSettings(){

    const dispatch = useDispatch();
    const {attrs} = useSelector(state => state.selected.item)


    const handleNumbersChange = (e) => {
        const {name , value} = e.target;

        dispatch(updateSelected({
            attrs : {
                ...attrs,
                [name]: Number(value)
            }
        }))
    }

    const handleInputChange = (e) =>{
        const {name , value} = e.target;

        dispatch(updateSelected({
            attrs : {
                ...attrs,
                [name]: value
            }
        }))
    }

    const handleTextAlign = (align) => {
        dispatch(updateSelected({
            attrs : {
                ...attrs,
                align
            }
        }))
    } 

    const handleTextDecoration = (decoration) => {
        dispatch(updateSelected({
            attrs : {
                ...attrs,
                textDecoration : decoration
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
                stroke: color
            }
        }))
    }

    const handleShadowChange = (color) =>{
        dispatch(updateSelected({
            attrs : {
                ...attrs,
                shadowColor: color
            }
        }))
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
                                    onChange={handleNumbersChange}
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
                                onChange={handleNumbersChange}
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
                        id="text"
                        name='text'
                        value={attrs.text || 'Your Text Here'}
                        placeholder="Text here..."
                        onChange={handleInputChange}
                        rows={4}
                    />
                </div>

                <div className='flex justify-between items-center gap-5 my-4'>

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
                                onChange={handleNumbersChange}
                            />
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
                            <Button color="gray" onClick = {() => handleTextAlign('left')} style = {{ backgroundColor : `${attrs.align === 'left' ? 'rgb(55 65 81)' : ''}` }}>
                                <Bars3BottomLeftIcon className="h-4 w-4" />
                            </Button>
                            <Button color="gray" onClick = {() => handleTextAlign('center')} style = {{ backgroundColor : `${attrs.align === 'center' ? 'rgb(55 65 81)' : ''}` }}>
                                <Bars3Icon className="h-4 w-4" />
                            </Button>
                            <Button color="gray" onClick = {() => handleTextAlign('right')} style = {{ backgroundColor : `${attrs.align === 'right' ? 'rgb(55 65 81)' : ''}` }}>
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
                            onChange={handleNumbersChange}
                        />
                    </div>
                </div>

                <div className='flex justify-between items-center gap-5 my-4'>
                    <div className='input-group'>
                        <div className='mb-2 block'>
                            <Label htmlFor='textDecoration' value = "Text Decoration" />
                        </div>
                        <Button.Group>
                            <Button color="gray" onClick = {() => handleTextDecoration('normal')} style = {{ backgroundColor : `${attrs.textDecoration === 'normal' ? 'rgb(55 65 81)' : ''}` }}>
                                    <Tooltip content="normal">
                                        <UpperCase fill = '#fff' height= "16px" width= "16px" />
                                    </Tooltip>
                                </Button>
                            <Button color="gray" onClick = {() => handleTextDecoration('line-through')} style = {{ backgroundColor : `${attrs.textDecoration === 'line-through' ? 'rgb(55 65 81)' : ''}` }}>
                                <Bars3Icon className="h-4 w-4" />
                            </Button>
                            <Button color="gray" onClick = {() => handleTextDecoration('underline')} style = {{ backgroundColor : `${attrs.textDecoration === 'underline' ? 'rgb(55 65 81)' : ''}` }}>
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
                                onChange={handleNumbersChange}
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
                                onChange={handleNumbersChange}
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
                                onChange={handleNumbersChange}
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
                                onChange={handleNumbersChange}
                        />
                    </div>

                </div>

            </div>
        </div>
    )
}