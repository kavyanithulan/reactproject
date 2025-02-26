import { useEffect } from "react"

const BasicEffect = () => {

    useEffect(()=>{
        console.log('inside use effect');
    });
  return (
    <div>BasicEffect</div>
  )
}

export default BasicEffect