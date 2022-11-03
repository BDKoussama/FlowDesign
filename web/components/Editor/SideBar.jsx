import { useEffect } from "react";
import { useContext, useState } from "react"
import {WidgetContext} from '../../context/WidgetContext'
import { RectangleGroupIcon } from '@heroicons/react/24/outline'
import { LanguageIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/outline'
import { PhotoIcon } from '@heroicons/react/24/outline'
import { Squares2X2Icon } from '@heroicons/react/24/outline'
import { CloudArrowDownIcon } from '@heroicons/react/24/outline'
import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline'

export default function SideBar(){

    const {setWidget} = useContext(WidgetContext)

    const [template , setTemplate] = useState('template');

    const handleChange = (e) => {
        setTemplate(e.target.value);
    }

    useEffect(() => {
        setWidget(template)
    },[template , setWidget])

    return (
        <div className='editor-navbar flex flex-col'>
            <div className="logo-wrapper h-12 w-12 bg-white mt-6 mx-auto rounded-full">
            </div>

            <div className='editor-sidebar_menu w-full mt-6 h-full'>
                <ul className='sidebar-menu_list'>

                    <li className='sidebar-menu_list-item '> 
                        <div className='list-item_content text-center text-sm font-normal'>
                            <label className="custom-radio" htmlFor="template">
                                <input checked = {template === 'template'} type="radio" value='template' name="plan" id="template"  onChange = {handleChange} />
                                <div className="custom-radio_content">
                                    <RectangleGroupIcon className="h-6 w-6 text-white"/>
                                    <div className="custom-radio_text">
                                        <span>Template</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </li>

                    <li className='sidebar-menu_list-item'>
                        <div className='list-item_content text-center text-sm font-normal'>
                            <label className="custom-radio" htmlFor="text">
                                <input checked = {template === 'text'} type="radio" value='text' name="plan" id="text" onChange = {handleChange} />
                                <div className="custom-radio_content">
                                    <LanguageIcon className="h-6 w-6 text-white"/>
                                    <div className="custom-radio_text">
                                        <span>Text</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </li> 

                    <li className='sidebar-menu_list-item'>
                        <div className='list-item_content text-center text-sm font-normal'>
                            <label className="custom-radio" htmlFor="elements">
                                <input checked = {template === 'elements'} type="radio" value='elements' name="elements" id="elements" onChange = {handleChange} />
                                <div className="custom-radio_content">
                                    <StarIcon className="h-6 w-6 text-white"/>
                                    <div className="custom-radio_text">
                                        <span>Shapes</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </li>

                     <li className='sidebar-menu_list-item'>
                        <div className='list-item_content text-center text-sm font-normal'>
                            <label className="custom-radio" htmlFor="photos">
                                <input checked = {template === 'photos'} type="radio" value='photos' name="photos" id="photos" onChange = {handleChange} />
                                <div className="custom-radio_content">
                                    <PhotoIcon className="h-6 w-6 text-white"/>
                                    <div className="custom-radio_text">
                                        <span>Photos</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </li> 

                    <li className='sidebar-menu_list-item'>
                        <div className='list-item_content text-center text-sm font-normal'>
                            <label className="custom-radio" htmlFor="background">
                                <input checked = {template === 'background'} type="radio" value='background' name="background" id="background" onChange = {handleChange} />
                                <div className="custom-radio_content">
                                    <Squares2X2Icon className="h-6 w-6 text-white"/>
                                    <div className="custom-radio_text">
                                        <span>Background</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </li> 

                    <li className='sidebar-menu_list-item'>
                        <div className='list-item_content text-center text-sm font-normal'>
                            <label className="custom-radio" htmlFor="upload">
                                <input checked = {template === 'upload'} type="radio" value='upload' name="upload" id="upload" onChange = {handleChange} />
                                <div className="custom-radio_content">
                                    <CloudArrowDownIcon className="h-6 w-6 text-white"/>
                                    <div className="custom-radio_text">
                                        <span>Upload</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </li> 

                    <li className='sidebar-menu_list-item'>
                        <div className='list-item_content text-center text-sm font-normal'>
                            <label className="custom-radio" htmlFor="resize">
                                <input checked = {template === 'resize'} type="radio" value='resize' name="resize" id="resize" onChange = {handleChange} />
                                <div className="custom-radio_content">
                                    <ArrowsPointingOutIcon className="h-6 w-6 text-white"/>
                                    <div className="custom-radio_text">
                                        <span>Resize</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </li> 

                </ul>
            </div>
        </div>
    )
}