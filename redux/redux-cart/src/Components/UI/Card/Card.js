const Card = (props) => {
    return <>
        <div className={`rounded-2xl p-4 m-2 bg-blue-300 ${props.className}`} >
                {props.children}
        </div>
    </>
}
export default Card