import { useEffect, useState } from "react"

const FetchDataEffect = () => {
    const[postData,setPostData]=useState([]);
    useEffect(()=>{
        async function getPostData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPostData(data);
        }
        getPostData();
    },[postData]);
  return (
    <div>FetchDataEffect:
        <h1>First post title: </h1>
        {postData.length>0?<h4>{postData[0].title}</h4>:<p>Loading...</p>}
        {postData.map(post=>(
            <ul key={post.id}>
                <li>{post.title}</li>
            </ul>
        ))}
    </div>
  )
}

export default FetchDataEffect;