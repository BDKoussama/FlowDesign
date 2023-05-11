
export default function Container({children , mb = "mb-8"}){
    return (
        <div className={`container mx-auto px-2 lg:px-0 ${mb}`}>
            {children}
        </div>
    )
}


/* <ScrollToTop/>*/