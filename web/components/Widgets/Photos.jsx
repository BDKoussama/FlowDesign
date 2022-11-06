import UnsplashGallery from "../Layout/UnsplashGallery";
import {QueryClient , QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();

export default function Photos(){
    return(
        <div>
            <h3>Add Photos</h3>
            <div className="mt-10">
                <QueryClientProvider   QueryClientProvider client={queryClient}>
                    <UnsplashGallery widget = "photos"/>
                </QueryClientProvider>
            </div>
        </div>
    )
}