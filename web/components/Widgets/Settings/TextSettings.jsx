import {Label , TextInput , Textarea  , Button , Tooltip} from 'flowbite-react'
import {useDispatch , useSelector} from 'react-redux';
import ColorPicker from '../../Layout/ColorPicker';
import { Bars3Icon , Bars3BottomLeftIcon , Bars3BottomRightIcon } from '@heroicons/react/24/outline'
import {UpperCase , Underline , Bold , ItalicText , StrikeText } from '../../Svg/index'
import { updateSelected } from '../../../app/features/canvas/selectSlice';
import { useEffect } from 'react';
import  Select from 'react-select';

  const options = [
       {
            value :  'Playfair Display',
            label :  'Playfair Display'
       },
       {
            value :  'Anton',
            label :  'Anton'
       },
       {
            value :  'Bad Script',
            label :  'Bad Script'
       },
        {
            value :  'Catamaran',
            label :  'Catamaran'
        },
        {
            value :  'Droid Sans',
            label :  'Droid Sans'
        },
        {
            value :  'Droid Serif',
            label :  'Droid Serif'
        },
        {
            value :  'Hammersmith One',
            label :  'Hammersmith One'
        },
        {
            value :  'Hanalei',
            label :  'Hanalei'
        },
        {
            value :  'IM Fell Double Pica',
            label :  'IM Fell Double Pica'
        },
        {
            value :  'Lobster',
            label :  'Lobster'
        },
        {
            value :  'Merriweather',
            label :  'Merriweather'
        },
        {
            value :  'Noto Sans JP',
            label :  'Noto Sans JP'
        },
        {
            value :  'Open Sans',
            label :  'Open Sans'
        },
        {
            value :  'Pangolin',
            label :  'Pangolin'
        },
        {
            value :  'Roboto',
            label :  'Roboto'
        },
        {
            value :  'Shadows Into Light',
            label :  'Shadows Into Light'
        },
        {
            value :  'Stalinist One',
            label :  'Stalinist One'
        },
        {
            value :  'Ubuntu',
            label :  'Ubuntu'
        },
        {
            value :  'Ultra',
            label :  'Ultra'
        },
        {
            value : 'Oswald',
            label : 'Oswald'
        },
        {
            value : 'Raleway',
            label : 'Raleway'
        },
        {
            value : 'Montserrat',
            label: 'Montserrat'
        },
        {
            value : 'PT Sans',
            label : 'PT Sans'
        },
        {
            value : 'Poppins',
            label : 'Poppins'
        },
        {
            value : 'Cantata One',
            label : 'Cantata One'
        },
        {
            value : 'Cardo',
            label : 'Cardo'
        },
        { 
            value: 'Lora', 
            label: 'Lora'
        },
        { 
            value: 'Domine' ,
            label: 'Domine' 
        },
        { 
            value: 'Karla',
            label: 'Karla' 
        },
        { 
            value: 'Pacifico',
            label: 'Pacifico' 
        },
        { 
            value: 'Abril Fatface' ,
            label: 'Abril Fatface' 
        },
        { 
            value: 'Barlow',
            label: 'Barlow'
        }
  ]

export default function TextSettings(){


    const dispatch = useDispatch();

    const {attrs} = useSelector(state => state.selected.present.item)
    
    useEffect(() => {
        const WebFont = require('webfontloader');
        if(typeof window !== 'undefined'){
            WebFont.load({
                google: { 
                  families : options.map(item => item.value)
                },
               // called when the load of an individual font commences.
                fontloading: function(familyName, fvd) {
                  //console.log('Loading font [' + familyName + ']')
                },
               // called when the load of an individual font completes.
                fontactive: function(familyName, fvd) {
                  //console.log('Loaded font [' + familyName + ']')
                }
            })
        }
       
    },[])
    

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

    const handleFontstyle = (style) => {

       const fontStyle = attrs.fontStyle;

       let newFontStyle = ''

       if(style === fontStyle &&  style === 'bold'){
            newFontStyle = ''
       }else if((style === "bold" && fontStyle === '') || (style === "italic" && fontStyle === '')){
            newFontStyle = style
       }else if(style === fontStyle &&  style === 'italic'){
            newFontStyle = ''
       }else if((style === 'bold' && fontStyle === 'italic') || (style === 'italic' && fontStyle === 'bold')){
            newFontStyle = 'italic bold'
       }else if(style === 'bold' && fontStyle === 'italic bold') {
            newFontStyle = 'italic'
       }else if(style === 'italic' && fontStyle === 'italic bold'){
            newFontStyle = 'bold'
       }
        
       dispatch(updateSelected({
            attrs : {
                ...attrs,
                fontStyle: newFontStyle
            }
        }))

    } 

    const handleFamilyTypeChange = (e) =>{
        dispatch(updateSelected({
            attrs : {
                ...attrs,
                fontFamily: e.value
            }
        }))
    }

    return (
        <div className='h-screen overflow-y-scroll pb-10 p-4'>
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

                    <Select 
                        styles={{ 
                            placeholder: (defaultStyles) => ({
                                    ...defaultStyles,
                                    color: '#ffffff',
                            }),
                            option: (provided, state) => ({ ...provided, 
                                fontFamily: state.value , 
                                cursor : 'pointer' ,
                                backgroundColor: '#374151' ,
                                "&:hover" : {
                                    backgroundColor : "#1f2937"
                                }
                            }),
                            control: (styles) => ({ ...styles, 
                                backgroundColor: '#374151' , 
                                borderColor : '#4b5563' ,
                                "&:hover" : {
                                    backgroundColor : "#1f2937"
                                }
                            })
                        }}
                        value={attrs.fontFamily} 
                        placeholder= {attrs.fontFamily}
                        name='fontFamily' 
                        className='text-white'
                        onChange={handleFamilyTypeChange} 
                        options = {options}
                        
                    />
                    
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
                            step={0.1}
                            min={0} 
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
                            <Button color="gray" onClick={() => handleFontstyle('bold')} style = {{ backgroundColor : `${ (attrs.fontStyle === 'bold' || attrs.fontStyle === 'italic bold' ) ? 'rgb(55 65 81)' : ''}` }}>
                                <Bold fill = '#fff' height= "16px" width= "16px" />
                            </Button>
                            <Button color="gray" onClick={() => handleFontstyle('italic')} style = {{ backgroundColor : `${(attrs.fontStyle === 'italic' || attrs.fontStyle === 'italic bold') ? 'rgb(55 65 81)' : ''}` }}>
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
                        placeholder="Text Rotation"
                        onChange={handleNumbersChange}
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