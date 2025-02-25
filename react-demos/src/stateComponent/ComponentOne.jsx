/* eslint-disable react/prop-types */
const ComponentOne = (props)=>
{
    const handleClick=()=>{
        // eslint-disable-next-line react/prop-types
        props.onClickHandler();
    }

return <div>
    <p>{props.count}</p>
    <button onClick={handleClick}>Increment</button>
</div>
}

export default ComponentOne;