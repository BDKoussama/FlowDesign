import Image from 'next/image';
import Link from 'next/link'
export default function GalleryItem({photo}){
    console.log(photo)
    return (
        <div className='gallery-item'>
            <div className='w-24 h-32 relative m-1 overflow-hidden rounded cursor-pointer'>
                <Image layout='fill' objectFit='cover' loading='lazy' src = {photo.urls.small} alt = {photo.alt_description}/>
                <div className="gallery-item_overlay absolute top-0 h-full w-full flex items-end before:content[''] before:opacity-50 before:w-full before:h-full before:block before:bg-black before:absolute">
                    <p className='text-[11px] p-0.5 text-center z-[1]'>
                        <span className='inline-block mx-0.5'>Photo by</span>
                        <span className='inline-block mx-0.5 text-[#7dd5f0]'>
                            <Link href = {photo?.user?.links?.html} >
                                <a target="_blank">
                                    {photo?.user?.first_name}
                                </a>
                            </Link>
                        </span>
                        <span className='inline-block mx-0.5'>on</span>
                        <span className='inline-block mx-0.5 text-[#7dd5f0]'>
                            <Link href="https://unsplash.com/" >
                                <a target="_blank">
                                    Unsplash
                                </a>
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}