import Button from "./Button";

export default function Section({ direction , title , description , subtitle , style }){
    return (
        <div className={`w-full h-screen my-40 flex justify-between items-center ${direction}`}>
            <div className='flex-1 '>    
                <span className="inline-block uppercase text-[#644595] font-medium mb-5 ">
                    {subtitle}
                </span>
                <h3 className="font-black text-4xl mb-10">
                    {title}
                </h3>
                <p className="text-lg font-regular mb-10 w-10/12">
                    {description}
                </p>
                <Button text= "Create your social graphic now" url="/editor" />
            </div>
            <div className={`bg-gray-200 w-full flex-1 h-[70vh] rounded-lg ${style}`}>
            </div>
        </div>
    )
}