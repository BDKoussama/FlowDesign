import {useInfiniteQuery} from 'react-query';
import axios from 'axios';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { useRef, useState } from 'react';
import GalleryItem from './GalleryItem';
import {Spinner} from 'flowbite-react'

export default function UnsplashGallery ({widget}) {

    const [search , setSearch] = useState('')

    const [keyword , setKeyWord] = useState('random')

    const {
        status , 
        data , 
        error, 
        isFetching ,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery(['images' , keyword], 
        async ({ pageParam = 1 }) => {
            const res = await axios.get("https://api.unsplash.com/search/photos", {
                headers : {
                    Authorization : `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
                },
                params : {
                    query : keyword,
                    per_page : 20,
                    page : pageParam
                }
            });
            const results = {
                ...res.data,
                nextPage : pageParam + 1
            }
            return results;
        } , {
        getNextPageParam: (lastPage , pages) => {
            if (lastPage.nextPage < lastPage.total_pages) return lastPage.nextPage;
            return false;
        }
    })

    const loadMoreRef = useRef();

    useIntersectionObserver({
        target: loadMoreRef,
        onIntersect: fetchNextPage,
        enabled: !!hasNextPage,
    })

    return (
        <div className='flex flex-col justify-between'>
            <div className="my-3">
                    <form onSubmit={(e) => {
                                e.preventDefault()
                                setKeyWord(search)
                            }}>   
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input  onChange={(e) => setSearch(e.target.value)} type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Photos..." required />
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
            </div>

            <div className="unsplash-gallery w-full h-[71vh] overflow-scroll"> 
                {
                    status === "loading" ? (
                        <div className='flex items-center justify-center p-3'>
                            <Spinner aria-label="Default status example" />
                        </div>) : 
                    status === "error" ? (<div> error.message </div>) : 
                    (
                        <div className='h-full'>
                            {
                                data.pages.map((page , i) => (
                                    <div key={i.toString()} className = "flex flex-row flex-wrap justify-start">
                                        {
                                            page.results.map((photo => (
                                                <GalleryItem key={photo.id} photo = {photo} widget = {widget} />
                                            )))
                                        }
                                    </div>
                                ))
                            }

                            <div ref = {loadMoreRef} className=''>
                                {isFetchingNextPage && isFetching
                                ? (<div className='flex items-center justify-center p-3'>
                                    <Spinner aria-label="Default status example" />
                                </div>)
                                : hasNextPage
                                ? null
                                : <p>Nothing more to load</p>}
                            </div>

                        </div>
                    )
                }
            </div>

        </div>
    )
}