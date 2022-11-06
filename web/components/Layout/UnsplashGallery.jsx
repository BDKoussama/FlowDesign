import {useInfiniteQuery} from 'react-query';
import axios from 'axios';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function UnsplashGallery () {

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
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input input-bordered w-full" onChange={(e) => setSearch(e.target.value) }/>
                            <button className="btn btn-square" onClick={(e) => {
                                e.preventDefault()
                                setKeyWord(search)
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
            </div>

            <div className="unsplash-gallery w-full h-[71vh] overflow-scroll"> 
                {
                    status === "loading" ? (<p>Loading</p>) : 
                    status === "error" ? (<div> error.message </div>) : 
                    (
                        <div className='h-full'>
                            {
                                data.pages.map((page , i) => (
                                    <div key={i.toString()} className = "flex flex-row flex-wrap justify-start">
                                        {
                                            page.results.map((photo => (
                                                <div className='w-24 h-32 relative m-1' key={photo.id}>
                                                        <Image layout='fill' objectFit='cover' loading='lazy' src = {photo.urls.small} alt = {photo.alt_description}/>
                                                </div>
                                            )))
                                        }
                                    </div>
                                ))
                            }

                            <div ref = {loadMoreRef} className=''>
                                {isFetchingNextPage && isFetching
                                ? <p>Loading</p>
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