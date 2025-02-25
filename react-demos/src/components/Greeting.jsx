const Greeting = ({timeOfDay}) =>{
  
    return timeOfDay === "Morning" ? <h2>Good morning!</h2> : <h2>Good day</h2>
};

export default Greeting;