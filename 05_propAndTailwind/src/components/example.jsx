//better way 
function Example({username="default Value"}){
    return(
        <>
        <p>this is most accepted way </p>

        {/* look i have given value not given as default  */}
        <h1>{username}</h1>
        </>
    )
}

export default Example;