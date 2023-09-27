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
import { Square3Stack3DIcon } from '@heroicons/react/24/outline'
import { FaceSmileIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Logo from '../../components/Svg/Logo';

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
        <div className='editor-navbar flex flex-col bg-gray-900 w-full h-auto md:w-[100px] md:h-[100vh] overflow-hidden'>

            <div className="logo-wrapper md:flex items-center hidden justify-center  mx-auto">
                <Link href="/">
                    <a className=""><Logo width={70}/></a>
                </Link>   
            </div>

            <div className='editor-sidebar_menu w-full md:mt-0 h-full overflow-x-scroll'>
                <ul className='sidebar-menu_list flex w-[200%] md:block md:w-full'>

                    <li className='sidebar-menu_list-item w-[90px] md:w-auto'> 
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

                    <li className='sidebar-menu_list-item w-[90px] md:w-auto'>
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

                    <li className='sidebar-menu_list-item w-[90px] md:w-auto'>
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

                     <li className='sidebar-menu_list-item w-[90px] md:w-auto'>
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

                    <li className='sidebar-menu_list-item w-[90px] md:w-auto'>
                        <div className='list-item_content text-center text-sm font-normal'>
                            <label className="custom-radio" htmlFor="stickers">
                                <input checked = {template === 'stickers'} type="radio" value='stickers' name="stickers" id="stickers" onChange = {handleChange} />
                                <div className="custom-radio_content">
                                    <FaceSmileIcon className="h-6 w-6 text-white"/>
                                    <div className="custom-radio_text">
                                        <span>Stickers</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </li> 

                    <li className='sidebar-menu_list-item w-[90px] md:w-auto'>
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

                    <li className='sidebar-menu_list-item w-[90px] md:w-auto'>
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

                    <li className='sidebar-menu_list-item w-[90px] md:w-auto'>
                        <div className='list-item_content text-center text-sm font-normal'>
                            <label className="custom-radio" htmlFor="layers">
                                <input checked = {template === 'layers'} type="radio" value='layers' name="layers" id="layers" onChange = {handleChange} />
                                <div className="custom-radio_content">
                                    <Square3Stack3DIcon className="h-6 w-6 text-white"/>
                                    <div className="custom-radio_text">
                                        <span>Layers</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </li> 

                    <li className='sidebar-menu_list-item w-[90px] md:w-auto'>
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