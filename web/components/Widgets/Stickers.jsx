import {QueryClient , QueryClientProvider } from 'react-query';
import FlaticonGallery from '../Layout/FlaticonGallery';
const queryClient = new QueryClient();


export default function Stickers(){
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
}