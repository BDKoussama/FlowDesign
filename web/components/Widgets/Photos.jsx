import UnsplashGallery from "../Layout/UnsplashGallery";
import {QueryClient , QueryClientProvider } from 'react-query';
import { useSelector} from "react-redux";
import ImageSettings from "./Settings/ImageSettings";

const queryClient = new QueryClient();

export default function Photos(){

    const {item} = useSelector(state => state.selected.present)

    if(item.id !== null & item.type === "Image"){
        return (<ImageSettings />)
    }else {
        return(
            <div className="p-4">
                <h3>Add Photos</h3>
                <div className="mt-10">
                    <QueryClientProvider   QueryClientProvider client={queryClient}>
                        <UnsplashGallery widget = "photos"/>
                    </QueryClientProvider>
                </div>
            </div>
        )
    }
    
}