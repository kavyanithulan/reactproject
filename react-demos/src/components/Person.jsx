const Person =(props)=>{
return (
    <div>
        <img src={props.kavyaimg} alt={props.name} width={200} height={250}></img>
        <h1>Name: {props.name}</h1>
        <h2>Age: {props.age}</h2>
        <h3>Ismarried: {props.isMarried}</h3>
        <h4>Hobbies: {props.hobbies}</h4>
    </div>
);
};

export default Person;