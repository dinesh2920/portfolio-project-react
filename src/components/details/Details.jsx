import "./Details.scss";
import { motion } from "framer-motion";
import {useState} from "react"
const Details = ({title,details,x,y}) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick=()=>{
    setIsClicked(!isClicked);
    console.log(isClicked);
  }
  return (
    <motion.div
      className=
      {`box ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
      // whileTap={{
      //   background: "lightgray",
      //   color: "black",
      //   scale: "1.2",
      //   x:x,
      //   y:y,
      //   zIndex: "2",
      // }}
    //   animate={isClicked ?{
        
    //     background: "lightgray",
    //     color: "black",
    //   }:{}}
    >
      <h3>{title}</h3>
      <p>
        {details}
      </p>
      {/* <button>Go</button> */}
    </motion.div>
  );
};

export default Details;
