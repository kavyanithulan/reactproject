/* eslint-disable react/prop-types */
const ComponentTwo = ({count,onClickHandler})=>{
    const handleClick=()=>{
       
        onClickHandler();
    };
    return(
        <div>component two
            <p>{count}</p>
            <button onClick={handleClick}>Increment2</button>
        </div>
    );
};

export default ComponentTwo;