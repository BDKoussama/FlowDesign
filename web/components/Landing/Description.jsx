export default function Description({text , style}){
    return(
        <p className={`font-medium text-lg mt-5 w-9/12 mx-auto ${style}`}>
            {text}
        </p>
    )
}