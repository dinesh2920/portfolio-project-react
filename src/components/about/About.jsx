import { useRef } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import Details from "../details/Details";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  // const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      whileInView={"animate"}
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <img src="/people.webp" alt="" /> */}
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Skills</motion.b> and
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Experience</motion.b> in
            the field.
          </h1>
          <button>WHAT I KNOW?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <Details
          title="React JS"
          details="As a React.js expert, I specialize in crafting dynamic user
            interfaces with a focus on responsiveness and interactivity.
            Leveraging React&aposs component-based architecture and state
            management, I build high-performance applications that enhance user
            experiences. With expertise in modern JavaScript frameworks and
            tools like Redux, I deliver scalable solutions that meet evolving
            business needs."
          x="150%"
          y="-50%"
        ></Details>
        <Details
          title="Springboot & Spring"
          details="As a Spring Boot expert, I rapidly develop and deploy Java
          applications with streamlined configurations and efficient
          microservices architecture. Leveraging Spring Boot's
          convention-over-configuration approach, I excel in building
          scalable, RESTful APIs and containerized applications. Focused on
          optimizing performance and maintainability, I deliver tailored
          solutions, ensuring seamless integration and rapid iteration cycles."
          x="50%"
          y="-50%"
        ></Details>
        <Details
          title="Microservices & Containerization"
          details="I've designed and implemented microservices architecture,
          demonstrating proficiency in Docker for containerization and
          Kubernetes for orchestration. Leveraging these technologies, I
          create scalable and efficient systems, ensuring seamless deployment
          and management of applications."
          x="-50%"
          y="-50%"
        ></Details>
      </motion.div>
    </motion.div>
  );
};

export default Services;
