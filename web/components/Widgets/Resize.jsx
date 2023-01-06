import { useEffect, useState } from 'react';
import { Facebook , Twitter , Instagram , Youtube } from '../Svg/index';
import { useDispatch, useSelector } from 'react-redux';
import { setStageSize } from '../../app/features/canvas/stageSlice';


const sizes = {
    'ig-post' : {
        height : 1080,
        width : 1080,
        initialWidth : 1080,
        initialHeight : 1080,
        type: 'ig-post',
        widthAmount : 108,
        heightAmount: 108,
        scale : {
            x : 1 ,
            y : 1
        }
    },
    'ig-story' :{
        height: 1920,
        width: 1080,
        initialWidth : 1080 ,
        initialHeight : 1920,
        type : 'ig-story',
        widthAmount : 108,
        heightAmount: 192,
        scale : {
            x : 1 ,
            y : 1
        }
    },
    'fb-post' :{
        height: 788,
        width: 940,
        initialWidth : 940,
        initialHeight : 788,
        type : 'fb-post',
        widthAmount : 94,
        heightAmount: 78.8,
        scale : {
            x : 1 ,
            y : 1
        }
    },
    'fb-cover' :{
        height: 315,
        width: 851,
        initialWidth : 851,
        initialHeight : 315,
        type : 'fb-cover',
        widthAmount : 85.1,
        heightAmount: 31.5,
        scale : {
            x : 1 ,
            y : 1
        }
    },
    'fb-ad' :{
        height: 628,
        width: 1200,
        initialWidth : 1200,
        initialHeight : 628,
        type : 'fb-ad',
        widthAmount : 120,
        heightAmount: 62.8,
        scale : {
            x : 1 ,
            y : 1
        }
    },
    'tw-post' : {
        height : 1080,
        width : 1080,
        initialWidth : 1080,
        initialHeight : 1080,
        type: 'tw-post',
        widthAmount : 108,
        heightAmount: 108,
        scale : {
            x : 1 ,
            y : 1
        }
    },
    'tw-cover' : {
        height: 315,
        width: 851,
        initialWidth : 851,
        initialHeight : 315,
        scale : {
            x : 1 ,
            y : 1
        },
        type : 'tw-cover',
        widthAmount : 85.1,
        heightAmount: 31.5
    },
    'yt-thmb' :{
        height: 628,
        width: 1280,
        initialWidth : 1280,
        initialHeight : 628,
        type : 'yt-thmb',
        widthAmount : 128,
        heightAmount: 62.8,
        scale : {
            x : 1 ,
            y : 1
        }
    },
}

export default function Resize(){

    const {size} = useSelector((state) => state.stage.present)
    const dispatch = useDispatch()

    const [value , setValue] = useState(size.type)

    const handleChange = (post) => {
        setValue(post)
    }

    useEffect(() => {
        dispatch(setStageSize({
            ...sizes[value]
        }))
    },[value])

    return(
        <div className='p-4'>
            <h3>
                Resize
            </h3>

            <ul className='mt-10'>
                <li className='px-2'><span className='text-lg font-medium'>Instagram</span></li>

                <li className='resize-list_item mt-2'>
                    <button className={`flex justify-between items-center w-full p-2 ${value === 'ig-post' ? 'resize-list_item--checked ' : ''}`}  onClick={() => handleChange("ig-post")}>
                        <div className='flex justify-between items-center'>
                            <div className='h-5 w-5 relative mr-2'>
                                <Instagram fill= "#fff" height="100%" width = "100%"/>
                            </div>
                            <p className='block text-capitalize text-md text-white'> Instagram Post </p>
                        </div>
                        <p className='text-sm'>1080 x 1080 px</p>
                    </button>
                </li>

                <li className='resize-list_item mt-2'>
                    <button className= {`flex justify-between items-center w-full p-2 ${value === 'ig-story' ? 'resize-list_item--checked ' : ''}`}  onClick={() => handleChange("ig-story")}>
                        <div className='flex justify-between items-center'>
                            <div className='h-5 w-5 relative mr-2'>
                                <Instagram fill= "#fff" height="100%" width = "100%"/>
                            </div>
                            <p className='block text-capitalize text-md text-white'> Instagram Story </p>
                        </div>
                        <p className='text-sm'>1080 x 1920 px</p>
                    </button>
                </li>

                <li className='mt-5 px-2'><span className='text-lg font-medium'>Facebook</span></li>

                <li className='resize-list_item mt-2'>
                    <button className= {`flex justify-between items-center w-full p-2 ${value === 'fb-post' ? 'resize-list_item--checked ' : ''}`}  onClick={() => handleChange("fb-post")}>
                        <div className='flex justify-between items-center'>
                            <div className='h-5 w-5 relative mr-2'>
                                <Facebook fill= "#fff" height="100%" width = "100%"/>
                            </div>
                            <p className='block text-capitalize text-md text-white'> Facebook Post </p>
                        </div>
                        <p className='text-sm'>940 x 788 px</p>
                    </button>
                </li>

                <li className='resize-list_item mt-2'>
                    <button className= {`flex justify-between items-center w-full p-2 ${value === 'fb-cover' ? 'resize-list_item--checked ' : ''}`}  onClick={() => handleChange("fb-cover")}>
                        <div className='flex justify-between items-center'>
                            <div className='h-5 w-5 relative mr-2'>
                                <Facebook fill= "#fff" height="100%" width = "100%"/>
                            </div>
                            <p className='block text-capitalize text-md text-white'> Facebook Cover </p>
                        </div>
                        <p className='text-sm'>851 x 315 px</p>
                    </button>
                </li>

                <li className='resize-list_item mt-2'>
                    <button className= {`flex justify-between items-center w-full p-2 ${value === 'fb-ad' ? 'resize-list_item--checked ' : ''}`}  onClick={() => handleChange("fb-ad")}>
                        <div className='flex justify-between items-center'>
                            <div className='h-5 w-5 relative mr-2'>
                                <Facebook fill= "#fff" height="100%" width = "100%"/>
                            </div>
                            <p className='block text-capitalize text-md text-white'> Facebook Ad </p>
                        </div>
                        <p className='text-sm'>1200 x 628 px</p>
                    </button>
                </li>

                <li className='mt-5 px-2'><span className='text-lg font-medium'>Twitter</span></li>

                <li className='resize-list_item mt-2'>
                    <button className= {`flex justify-between items-center w-full p-2 ${value === 'tw-post' ? 'resize-list_item--checked ' : ''}`}  onClick={() => handleChange("tw-post")}>
                        <div className='flex justify-between items-center'>
                            <div className='h-5 w-5 relative mr-2'>
                                <Twitter fill= "#fff" height="100%" width = "100%"/>
                            </div>
                            <p className='block text-capitalize text-md text-white'> Twitter Post </p>
                        </div>
                        <p className='text-sm'>1080 x 1080 px</p>
                    </button>
                </li>

                <li className='resize-list_item mt-2'>
                    <button className= {`flex justify-between items-center w-full p-2 ${value === 'tw-cover' ? 'resize-list_item--checked ' : ''}`}  onClick={() => handleChange("tw-cover")}>
                        <div className='flex justify-between items-center'>
                            <div className='h-5 w-5 relative mr-2'>
                                <Twitter fill= "#fff" height="100%" width = "100%"/>
                            </div>
                            <p className='block text-capitalize text-md text-white'> Twitter Cover </p>
                        </div>
                        <p className='text-sm'>851 x 315 px</p>
                    </button>
                </li>

                <li className='mt-5 px-2'><span className='text-lg font-medium'>Youtube</span></li>


                <li className='resize-list_item mt-2'>
                    <button className= {`flex justify-between items-center w-full p-2 ${value === 'yt-thmb' ? 'resize-list_item--checked ' : ''}`}  onClick={() => handleChange("yt-thmb")}>
                        <div className='flex justify-between items-center'>
                            <div className='h-5 w-5 relative mr-2'>
                                <Youtube fill= "#fff" height="100%" width = "100%"/>
                            </div>
                            <p className='block text-capitalize text-md text-white'> Youtube Thumbnail </p>
                        </div>
                        <p className='text-sm'>1280 x 720 px</p>
                    </button>
                </li>

            </ul>
            
        </div>
    )
}