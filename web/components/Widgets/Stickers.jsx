import {stickers} from '../../utils/stickers'
import Sticker from '../Layout/Sticker';


export default function Stickers(){

    return(
        <div className="p-4 h-full">
            <div className="mt-10 overflow-y-scroll h-full">
                <div className='my-5'>
                    <h3 className='text-lg font-medium capitalize ml-2 mb-3 block'>{ stickers.emojis.title }</h3>
                    <div className = "flex flex-row flex-wrap justify-start">
                        {
                            stickers.emojis.icons.map((item => (
                                <Sticker key={item} url = {`/images/stickers/emojis/${item}`}/>
                            )))
                        }
                    </div>
                </div>

                <div className='my-5'>
                    <h3 className='text-lg font-medium capitalize ml-2 mb-3 block'>{ stickers.social.title }</h3>
                    <div className = "flex flex-row flex-wrap justify-start">
                        {
                            stickers.social.icons.map((item => (
                                <Sticker key={item} url = {`/images/stickers/social/${item}`}/>
                            )))
                        }
                    </div>
                </div>


                <div className='my-5'>
                    <h3 className='text-lg font-medium capitalize ml-2 mb-3 block'>{ stickers.arrows.title }</h3>
                    <div className = "flex flex-row flex-wrap justify-start">
                        {
                            stickers.arrows.icons.map((item => (
                                <Sticker key={item} url = {`/images/stickers/arrows/${item}`}/>
                            )))
                        }
                    </div>
                </div>



            </div>
        </div>
    )
}


/**export default function Stickers(){
    return(
        <div className="p-4">
            <h3>Stickers</h3>
            <div className="mt-10">
                <QueryClientProvider   QueryClientProvider client={queryClient}>
                    <FlaticonGallery />
                </QueryClientProvider>
            </div>
        </div>
    )
} */