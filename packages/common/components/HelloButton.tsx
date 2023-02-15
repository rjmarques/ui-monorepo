import { Button } from "antd";

const HelloButton = () => {
    return <Button type="primary" onClick={()=>{alert("oh, hello there!")}}>Hello Vite</Button>
}

export default HelloButton