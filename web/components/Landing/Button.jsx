import Link from 'next/link';

export default function Button({ text , url , style }){
    return(
        
        <Link href={url}>
            <span className={`cursor-pointer inline-block py-5 px-10 rounded-full bg-gradient-to-r to-[#A56FFC] from-[#644595] transition  text-white font-medium ${style}`}>
                {text}
            </span>
        </Link>
    )
}