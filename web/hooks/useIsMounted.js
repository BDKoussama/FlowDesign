import { useEffect, useRef } from "react";

export default function useIsMounted(){

    const isMountRef = useRef(true);

    useEffect(() => {
        isMountRef.current = false;
    },[])

    return isMountRef.current
}