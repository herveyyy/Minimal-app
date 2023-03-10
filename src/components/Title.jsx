
function Title({children, id}){
    return(
    
    <h1
    id={id && id}
    className="text-2x1 font-bold underline
    underline-offset-8 decoration-4 mb-5
    light:text-stone-900"
    >
        {children}
    </h1>
    
    )
    
    }
    export default Title;