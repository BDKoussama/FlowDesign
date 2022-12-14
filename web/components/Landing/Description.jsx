export default function Description({text , style}){
    return(
        <p className={`font-medium text-lg mt-5 w-full lg:w-7/12 mx-auto ${style}`}>
            {text}
        </p>
    )
}